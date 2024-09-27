import { Link, Outlet } from "react-router-dom";

export default function Dashboard(){
    return(
        <div className="">
            {/* sidebar */}
            <div className=" w-52 ml-4">
                <nav className="flex flex-col fixed h-screen">
                    <Link to="users">Users</Link>
                    <Link to="posts">Posts</Link>
                    <Link to="ulbums">Ulbums</Link>
                </nav>
            </div>
            <Outlet/>
        </div>
    )
}