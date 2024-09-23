import { Link } from "react-router-dom";

export default function Layout({children}){
    return(
        <div className="">
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            {children}
            <footer>&copy;2024 training</footer>
        </div>
    )
}