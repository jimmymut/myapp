import { Link, Navigate, Outlet } from "react-router-dom";
import useCheckLogin from "../../hooks/useCheckLogin";
import { toast } from "react-toastify";

export default function Dashboard() {
    const user = useCheckLogin();
    if (!user) {
        toast.error("Unauthorized");
        return <Navigate to="/login" replace />
    }
    return (
        <div className="flex gap-5">
            {/* sidebar */}
            <div className=" w-52 ml-4 border-r border-gray-600 h-screen pt-3">
                <Link to="/" className="uppercase text-3xl font-bold">sjtt</Link>
                <nav className="flex flex-col fixed pt-3">
                    <Link to="users">Users</Link>
                    <Link to="posts">Posts</Link>
                    <Link to="ulbums">Ulbums</Link>
                </nav>
            </div>
            <Outlet />
        </div>
    )
}