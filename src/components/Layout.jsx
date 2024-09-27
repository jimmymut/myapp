import { Link } from "react-router-dom";

export default function Layout({children}){
    return(
        <div className="">
            <header>
                <nav className="flex gap-2">
                    <Link className="text-blue-600" to="/">Home</Link>
                    <Link className="text-blue-600" to="/signup">Signup</Link>
                    <Link className="text-blue-600" to="/about">About</Link>
                    <Link className="text-blue-600" to="/dashboard/users">Dasdhboard</Link>
                </nav>
            </header>
            {children}
            <footer>&copy;2024 training</footer>
        </div>
    )
}