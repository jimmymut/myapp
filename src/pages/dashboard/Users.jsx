import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { AppContext } from "../../App";
import AddUser from "../../components/AddUser";

export default function Users(){
    const api_url = import.meta.env.VITE_API_URL;
    const { loading } = useFetch(`${api_url}/users`, "users");
    const { state } = useContext(AppContext);
    const users = state.users.data;
    
    return(
        <div className="mt-3">
            {loading ? <p>Loading...</p>:(<>
                <h1 className="text-2xl font-semibold mb-3">This users list</h1>
                <AddUser/>
            {users.length ? 
            <table className="border border-collapse border-gray-500">
            <thead>
                <tr>
                    <th className="border border-gray-500">#</th>
                    <th className="border border-gray-500">Name</th>
                    <th className="border border-gray-500">Username</th>
                    <th className="border border-gray-500">Email</th>
                    <th className="border border-gray-500">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((us, index)=>(
                    <tr key={us.id}>
                        <th className="border border-gray-500">{index+1}</th>
                        <td className="border border-gray-500">{us.name}</td>
                        <td className="border border-gray-500">{us.username}</td>
                        <td className="border border-gray-500">{us.email}</td>
                        <td className="border border-gray-500"></td>
                    </tr>
                ))}
            </tbody>
        </table>:
        <p>No user found!</p>}
            </>)}
        </div>
    )
}