import User from "./User";
import { usersSelector } from "../selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../slices/usersSlice";
import axios from "axios";
import { usePostsData } from "../hooks";
import fetchPostsData from "../fetchPostsData";

const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector.selectAll) ?? null;

    // const { getPostsData } = usePostsData();

    const handleSetCurrentUser = async (id) => {
        dispatch(setCurrentUser(id));
        // dispatch(fetchPostsData(getPostsData(id)));
    };

    return (
        <div className="users__container">
            <ul className="users__list">
                {users.map((user) => <User user={user} key={user.id} onClick={() => handleSetCurrentUser(user.id)}/>)}
            </ul>
    </div>
    );
}
 
export default UsersContainer;