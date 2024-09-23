import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {MoonLoader, CircleLoader} from "react-spinners";
import axios from "axios";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const api_url = import.meta.env.VITE_API_URL;

    useEffect(()=>{
        setLoading(true)
        axios.get(`${api_url}/posts`).then((res)=>{
            setPosts(res.data);
        })
        .catch(error=> console.log(error))
        .finally(()=> setLoading(false))
    }, [])

    return (

        <div className="">
            {loading? <div className="flex items-center justify-center h-screen"><MoonLoader/></div>:<Layout>
            <div className="w-full h-screen bg-black text-white">
            <h1>Posts</h1>
            {!posts.length?<p>No posts found!</p>:
            posts.map((p, index)=>(
                <div className="" key={index}>
                    <h2>{p.title}</h2>
                    <p>{p.body}</p>
                </div>
            ))
            }
        </div>
        </Layout>}
        </div>
    );
}