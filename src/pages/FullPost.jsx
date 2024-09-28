import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import useFetchSingle from "../hooks/useFetchSingle";

export const FullPost = () =>{
    const { postId } = useParams();
    const api_url = import.meta.env.VITE_API_URL;
    const {loading, data: post} = useFetchSingle(postId, "posts", `${api_url}/posts/${postId}`);
    return (
        <div className="">
            {loading?<p className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">Loading...</p>:(
                <Layout>
                    <h1 className="w-full text-center font-bold pt-20 capitalize text-2xl px-5 pb-5">{post?.title}</h1>
                    <p className="px-5">{post?.body[0].toUpperCase()+post?.body.substring(1)}</p>
                </Layout>
            )}
        </div>
    )
}