import PostsContainer from "./posts/PostsContainer";
import UsersContainer from "./users/UsersContainer";


const AppCard = () => {
    return (
        <div>
        <div className="card">
            <div className="card__headers">
            <div className="users__header">
                <h3>USERNAMES</h3>
            </div>
            <div className="posts__header">
                <h3>POSTS</h3>
            </div>
        </div>
        <div  className="card-containers">
            <UsersContainer />
            <PostsContainer />
        </div>
        </div>
        </div>
    );
}
 
export default AppCard;