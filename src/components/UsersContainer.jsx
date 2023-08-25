import User from "./User";
import { usersSelector } from "../selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../slices/usersSlice";

const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector(usersSelector.selectAll) ?? null;
    console.log(users)

    const handleSetCurrentUser = (id) => {
        dispatch(setCurrentUser(id));
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