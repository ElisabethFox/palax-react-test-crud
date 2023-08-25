import PostsContainer from "./posts/PostsContainer";
import UsersContainer from "./users/UsersContainer";


const AppCard = () => {
    return (
        <div className="card">
            <UsersContainer />
            <PostsContainer />
        </div>
    );
}
 
export default AppCard;