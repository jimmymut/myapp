import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchPosts(){
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

    return{
        loading,
        posts
    }

}