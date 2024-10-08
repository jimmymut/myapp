import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupSchema from "../validators/auth";
import { toast } from "react-toastify";
import delay from '../helpers/delay';

// Removed the schema to validators/auth.js

export default function SignUpHookForm() {
    const [isSubitting, setIsSubitting] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signupSchema)
    });

    const onSubmit = async (data) => {
        setIsSubitting(true);
        // Here, we submit the data to backend

        // let add a delay here just to see the loading state
        // this one should not be used in app
        await delay(2000);

        //for now, lets save to localstorage since we are not having the backend yet
        localStorage.setItem("user", JSON.stringify(data));

        // after a user successifully registered, depending on backend if automatically login a user,
        // then it most likely to return a token and we save it in localStorage for future
        // use with the requests that require authorization  and tthen redirect a user to a
        // dashboard or the another page depending on the previllage
        // or we redirect this user to login page
        toast.success("Your account is successfully created!");
        setIsSubitting(false);
        navigate("/login");
    }

    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <div className="w-[600px] min-h-[80vh] bg-[url('./assets/bf_image.jpg')] flex items-center justify-center">
                <div className="flex min-h-[60vh] m-8 rounded-lg border-2 border-white justify-between items-center gap-8">
                    <div className="w-52 relative text-white ml-3">
                        <div className="py-3 absolute top-1/2 -left-10 -translate-y-1/2 bg-gradient-to-r from-[#15342e] z-10 pl-12">
                            <h1 className="font-bold mb-3">Sign Up</h1>
                            <p>sign up to unlock exciting eperience with our services</p>
                        </div>
                    </div>
                    <form className="min-h-[60vh] bg-white py-4 px-8" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="font-bold mb-3">Let's Get Started</h2>
                        <div className="mb-2">
                            <label htmlFor="">Name</label>
                            <input type="text" className={`w-full border border-gray-400 px-2 rounded focus:outline-none ${errors.name ? 'border-red-600' : 'border-green-600'}`} placeholder="Type your name"
                                {...register("name")} />

                            {errors.name && <p className=" text-red-600 ">{errors.name.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">email</label>
                            <input type="text" className={`w-full border border-gray-400 px-2 rounded focus:outline-none ${errors.email ? 'border-red-600' : 'border-green-600'}`} placeholder="Type your email"
                                {...register("email")}
                            />
                            {errors.email && <p className=" text-red-600 ">{errors.email.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Password</label>
                            <input type="password" className={`w-full border border-gray-400 px-2 rounded focus:outline-none ${errors.password ? 'border-red-600' : 'border-green-600'}`} placeholder="Type your email"
                                {...register("password")}
                            />
                            {errors.password && <p className=" text-red-600 ">{errors.password.message}</p>}
                        </div>
                        <div className="my-5">
                            {/* when submitting, this button has to be disabled to prevent another submission while the previous request is not yet finished and we show the loader */}
                            <button type="submit" disabled={isSubitting} className="w-full bg-blue-700 rounded text-white cursor-pointer py-1" >{isSubitting ? "Processing..." : "Submit"}</button>

                        </div>
                        <p>Have an account? <Link className="text-blue-600" to="/login">Login</Link> or <Link className="text-blue-600" to="/">Home</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}