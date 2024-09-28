import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";
import { useState, useRef, useContext } from "react";
import { toast } from "react-toastify";
import addUserSchema from "../validators/user";
import { AppContext } from "../App";

const AddUser = () => {
    const [addingUser, setAddingUser] = useState(false);
    const dialgRef = useRef(null);
    const { dispatch } = useContext(AppContext); 


    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(addUserSchema),
    });
 
    const openModal = ()=>{       
        const modal = dialgRef.current;
            if(modal){
                modal.showModal();
            }
    };
    const closeModal = ()=>{
        const modal = dialgRef.current;
            if(modal){
                modal.close();
            }
            reset(); 
    }

    const onSubmit = async (data) => {
            setAddingUser(true);
            axios.post("https://jsonplaceholder.typicode.com/users", data)
            .then((res)=>{
            toast.success("User added successfully");
            dispatch({type: "add/user", payload: res.data});  
            closeModal();
            }).catch((err)=>{
                console.log(err);
                toast.error("Adding a user failed") 
            }).finally(()=>setAddingUser(false));      
        
    }
    return (
        <>
        <button
        className="text-white mb-2 px-3 bg-blue-600 rounded border-none"
        onClick={openModal}
        >Add User</button>
        <dialog id="adduser" ref={dialgRef} className="min-w-72 max-w-80 rounded p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <h1 className="font-semibold mb-3 w-full text-center text-xl">Add a User</h1>
                <div className="w-full mb-2">
                    <input type="text" placeholder="Name" className="border rounded w-full px-2 border-gray-500" {...register("name")} />
                    <p className="text-red-700">{errors.name?.message}</p>
                </div>
                <div className="w-full mb-2">
                    <input type="text" placeholder="Username" className="border rounded w-full px-2 border-gray-500" {...register("username")} />
                    <p className="text-red-700">{errors.username?.message}</p>
                </div>
                <div className="w-full mb-2">
                    <input type="text" placeholder="Email" className="border rounded w-full px-2 border-gray-500" {...register("email")} />
                    <p className="text-red-700">{errors.email?.message}</p>
                </div>
                <div className=" flex w-full items-center justify-between gap-2 mb-5">
                    <button disabled={addingUser} className="px-2 rounded bg-blue-600 text-white cursor-pointer" type="submit">{addingUser?"Loading...": "Submit"}</button>
                    <button disabled={addingUser} onClick={closeModal} className="px-2 rounded bg-blue-600 text-white cursor-pointer" type="reset">Cancel</button>
                </div>
            </form>
        </dialog>
        </>
    )
}

export default AddUser;