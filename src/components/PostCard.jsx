import { Link } from "react-router-dom"

export const PostCard = ({ post }) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className="min-w-52 h-52 max-w-64 rounded bg-white shadow-md p-5">
                <h2 className="text-xl font-semibold capitalize mb-3 underline text-red-600">{post.title.substring(0, 20)}</h2>
                <p>{post.body.substring(0, 80) + "..."}</p>
            </div>
        </Link>
    )
}