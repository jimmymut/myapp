import { Link, Outlet } from "react-router-dom";
import Paragraph from "../../components/Parag";

export default function Dashboard(){
    return(
        <div className="flex gap-5">
            {/* sidebar */}
            <div className=" w-52 ml-4 border-r border-gray-600 h-screen pt-3">
                <nav className="flex flex-col fixed">
                    <Link to="users">Users</Link>
                    <Link to="posts">Posts</Link>
                    <Link to="ulbums">Ulbums</Link>
                </nav>
            </div>
            <div className="">
                <Paragraph body="This is Dashboard"/>
            <Outlet/>
            </div>
        </div>
    )
}