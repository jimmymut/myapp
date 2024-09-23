import Success from "../components/Success";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
    name: yup.string().min(3, "Too short").max(50).required("Name is required!"),
    email: yup.string().email().required(),
    password: yup.string().min(5).required()
})

export default function SignUpHookForm() {
    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } =useForm({
        resolver: yupResolver(schema)
      });

      const onSubmit = (data)=>{
        console.log(data);
        
      }
    



    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <div className=" w-1/2 h-3/4 m-auto pt-[10%] bg-[url('./assets/bf_image.jpg')]">

                <div className="flex p-8">
                    <div className=" relative text-white h-full">
                        <div className="w-52">
                            <h1 className="font-bold mb-3">Sign Up</h1>
                            <p>sign up to unlock exciting eperience with our services</p>
                        </div>
                    </div>

                    {show ? <Success show={show} setShow={setShow} message="Successifully submitted"/>:
                    <form className=" bg-white h-full p-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" className="w-full" placeholder="Type your name" {...register("name")}/>

                        {errors.name && <p className=" text-red-600 ">{errors.name.message}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">email</label>
                        <input type="text" className="w-full" placeholder="Type your email"
                        {...register("email")}
                        />
                        {errors.email && <p className=" text-red-600 ">{errors.email.message}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Password</label>
                        <input type="password" className="w-full" placeholder="Type your email"
                       {...register("password")}
                        />
                        {errors.password && <p className=" text-red-600 ">{errors.password.message}</p>}
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="w-full bg-blue-700 rounded text-white" />

                    </div>
                </form>}

                </div>
            </div>
        </div>
    );
}