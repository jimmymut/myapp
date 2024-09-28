import Layout from "../components/Layout";
import {ClipLoader} from "react-spinners";
import useFetch from "../hooks/useFetch";
import { PostCard } from "../components/PostCard";
import { useContext } from "react";
import { AppContext } from "../App";


export default function Home() {
    const api_url = import.meta.env.VITE_API_URL;
    const {loading } = useFetch(`${api_url}/posts`, "posts");
    const { state } = useContext(AppContext);
    const posts = state.posts.data;    

    return (
        <div className="bg-gray-200">
            {loading? <div className="flex items-center justify-center h-screen"><ClipLoader color="blue" size={50}/></div>:<Layout>
            <h1 className="w-full text-center font-bold text-3xl pb-5 pt-20">Posts</h1>
            <div className="flex flex-wrap gap-5 justify-center">
            {!posts.length?<p>No posts found!</p>:
            posts.map((post)=>(
                <PostCard post={post} key={post.id}/>
            ))
            }
        </div>
        </Layout>}
        </div>
    );
}