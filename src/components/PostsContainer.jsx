import { useSelector } from "react-redux";
import { currentUser, postsSelector } from "../selectors";
import Post from "./Post";

const PostsContainer = () => {
    const posts = useSelector(postsSelector.selectAll) ?? null;
    const currentUserData = useSelector(currentUser);
    const currentUserPosts = posts.filter((post) => post.userId === currentUserData?.id);
    console.log(currentUserPosts)
    return (
        <div className="posts__container">
            <ul className="posts__list">
                {currentUserPosts.map((post) => <Post post={post} key={post.id} />)}
            </ul>
        </div>
    );
}
 
export default PostsContainer;