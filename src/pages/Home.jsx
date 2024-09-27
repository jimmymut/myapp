import Layout from "../components/Layout";
import {MoonLoader} from "react-spinners";
import useFetchPosts from "../hooks/useFetchPosts";


export default function Home() {
    const {loading, posts } = useFetchPosts();
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