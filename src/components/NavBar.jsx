import { Link, useLocation } from "react-router-dom";
import useCheckLogin from "../hooks/useCheckLogin";
import { useContext } from "react";
import { AppContext } from "../App";
const NavBar = () => {
    const location = useLocation();
    const user = useCheckLogin();
    const { dispatch } = useContext(AppContext);
    
    return (
        <header className="bg-black h-16 px-3 fixed w-full pt-3">
                <Link to="/" className="text-white uppercase text-3xl font-bold">sjtt</Link>
                <nav className="flex gap-2 float-right text-xl pr-6">
                    <Link className={`text-blue-600 active:underline ${location.pathname == "/"?"border-b-2 border-red-600":""}`} to="/">Home</Link>
                    <Link className={`text-blue-600 active:underline ${location.pathname == "/about"?"border-b-2 border-red-600":""}`} to="/about">About</Link>
                    {user?(<div className="">
                        <Link className="text-blue-600 active:underline" to="/dashboard/users">Dashboard</Link>
                        <button className="ml-2 text-blue-600" onClick={()=>dispatch({type: "auth", user: null})}>Logout</button>
                        <span className="capitalize text-white ml-3">{user.name}</span>
                        </div>):(
                            <>
                            <Link className="text-blue-600 active:underline" to="/signup">Sign Up</Link>
                            <Link className="text-blue-600 active:underline" to="/login">Login</Link>
                            </>
                        )}
                    
                </nav>
            </header>
    )
}

export default NavBar;