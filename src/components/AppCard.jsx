import PostsContainer from "./PostsContainer";
import UsersContainer from "./UsersContainer";


const AppCard = () => {
    return (
        <div className="card">
            <UsersContainer />
            <PostsContainer />
        </div>
    );
}
 
export default AppCard;