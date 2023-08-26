import PostsContainer from "./posts/PostsContainer";
import UsersContainer from "./users/UsersContainer";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";
import { currentUser } from "../selectors";


const AppCard = () => {
    const currentUserData = useSelector(currentUser) ?? null;

    return (
        <div className="app-card">
            <div className="card__headers">
            <div className="users__header">
                <h5>USERNAMES</h5>
            </div>
            <div className="posts__header">
                <UserInfo user={currentUserData} />
            </div>
            </div>
        <div className="card-containers">
            <UsersContainer />
            <PostsContainer />
        </div>
        </div>
    );
}
 
export default AppCard;