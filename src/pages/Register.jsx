import { useState } from "react";
import Success from "../components/Success";
import Layout from "../components/Layout";

export default function Register() {
    
    // form/inputs states
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// error states
const [nameEroor, setNameError] = useState(undefined);
const [emailEroor, setEmailError] = useState(undefined);
const [passwordEroor, setpasswordError] = useState(undefined);

// display success popup state
const [show, setShow] = useState(false);


// Accessing the input data
const handleName = (e) => {
    const value = e.target.value
    
    setName(value);
    if(name.match(/^[A-Za-z\s]{2,50}$/)){
        setNameError(undefined);
    }else{
        setNameError("Invalid name");
    };
};
const handleEmail = (e) => {
    const value = e.target.value
    setEmail(value);
    if(email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)){
        setEmailError(undefined);
    }else{
        setEmailError("Invalid email");
    };

};
const handlePassword = (e) => {
    const value = e.target.value
    setPassword(value);
    if(password.length > 5){
        setpasswordError(undefined);
    }else{
        setpasswordError("Password is to short");
    };
}

// form validation and submit
const handleSubmit = (e)=>{

    // Toprevent default behavior of the form
    e.preventDefault();

    // validation starts

    // validating with regular expressios (Regex)
    if(!name.match(/^[A-Za-z\s]{2,50}$/)){
        setNameError("Invalid name");
        return;
    };
    if(!email.match(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)){
        setEmailError("Invalid email");
        return;
    };
    if(password.length < 5){
        setpasswordError("Password is to short");
        return;
    };

    // Saving to local storage
    localStorage.setItem("user", JSON.stringify({name, email, password}));
    setShow(true);

}



    return (
        <Layout>
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
                    <form className=" bg-white h-full p-4" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" className="w-full" placeholder="Type your name"
                        onInput={(e)=>handleName(e)}/>

                        {nameEroor && <p className=" text-red-600 ">{nameEroor}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">email</label>
                        <input type="text" className="w-full" placeholder="Type your email"
                        onChange={(e)=>handleEmail(e)}
                        />
                        {emailEroor && <p className=" text-red-600 ">{emailEroor}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Password</label>
                        <input type="password" className="w-full" placeholder="Type your email"
                        onChange={(e)=>handlePassword(e)}
                        />
                        {passwordEroor && <p className=" text-red-600 ">{passwordEroor}</p>}
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="w-full bg-blue-700 rounded text-white" />

                    </div>
                </form>}

                </div>
            </div>
        </div>
        </Layout>
    );
}