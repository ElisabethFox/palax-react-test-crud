import User from "./User";
import usersSelector from "../selectors";
import { useSelector } from "react-redux";

const UsersContainer = () => {
    const users = useSelector(usersSelector.selectAll) ?? null;

    return (
        <div className="users__container">
            <ul className="users__list">
                {users.map((user) => <User username={user.username} key={user.id}/>)}
            </ul>
    </div>
    );
}
 
export default UsersContainer;