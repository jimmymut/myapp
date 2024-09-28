// In this page I not using the custom popup for success or errors
// instead I will use a library called react-toastify
// to show messages
// first we neet to install it *npm i react-toastify*

// Then we need  to import these two in the use the in App.jsx
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { loginSchema } from '../validators/auth';
import { useContext, useState } from 'react';
import { AppContext } from '../App';
import delay from '../helpers/delay';

export default function Login() {
    const [isSubitting, setIsSubitting] = useState(false);
    const { dispatch } = useContext(AppContext);
    // The hook that helps us to redirect/navigate to another route
    const navigate = useNavigate();

    // This handles the form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema)
    });


    // The function that submits the data to the server
    // if the validation succeeds
    const onSubmit = async (data) => {
        setIsSubitting(true)
        // Here the logic to submit to the server
        // Using axios or fetch

        // for now lets get the user from localstorage
        // since localStorage is fast, we can not see the loading state
        // let's add a delay of 2 seconds to mitigate the actual request to the api
        await delay(2000);
        const user = localStorage.getItem("user");
        if (!user) {
            toast.error("User not found");
            return;
        }  
        const userObject = JSON.parse(user);
        //check if the email and password match
        if (data.password === userObject.password && data.email === userObject.email) {
            const { name, email } = userObject;
            // we update the state
            dispatch({ type: "auth", user: { name, email } });
            toast.success("successfully logged in");
            
            // If a user successifully login and has a dashbord
            // we redirect that user to the dashbord or else where if
            // the this kind of user does not have a dashbord because 
            // some kinds of users in the application may not have a dashbord
            // this is an example of how to redirect
            navigate("/dashboard/users");
            
        }else{
            // If the login fails, the user stays on this page.
            toast.error("Invalid credentials");
        }
        setIsSubitting(false);
    }

    return (
        <div className="w-screen h-screen bg-black flex items-center justify-center">
            <div className="w-[600px] min-h-[80vh] bg-[url('./assets/bf_image.jpg')] flex items-center justify-center">
                <div className="flex min-h-[60vh] m-8 rounded-lg border-2 border-white justify-between items-center gap-8">
                    <div className="w-52 relative text-white ml-3">
                        <div className="py-3 absolute top-1/2 -left-10 -translate-y-1/2 bg-gradient-to-r from-[#15342e] z-10 pl-12">
                            <h1 className="font-bold mb-3">Login</h1>
                            <p>Login to unleash the full power of our services</p>
                        </div>
                    </div>
                    <form className="min-h-[60vh] bg-white py-4 px-8" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="font-bold mb-3">Let's Get In</h2>
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
                        <p>No account? <Link className="text-blue-600" to="/signup">Sign Up</Link> or <Link className="text-blue-600" to="/">Home</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}