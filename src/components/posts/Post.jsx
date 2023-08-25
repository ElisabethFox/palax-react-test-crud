import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const Post = ({ post }) => {
    return (
        <li className="post">
            <div className="post__header">
            <h4 className="post__title">{post.title}</h4>
            <div className="post-menu">
                <button className="post-icon">
                    <FaPencilAlt />
                </button>
                <button className="post-icon">
                    <FaTrashAlt />
                </button>
            </div>
            </div>
            <p>{post.body}</p>
        </li>
    );
}
 
export default Post;