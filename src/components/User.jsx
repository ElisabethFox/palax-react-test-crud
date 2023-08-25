import cn from "classnames";
import { useSelector } from "react-redux";
import { currentUser } from "../selectors";

const User = ({ user, onClick }) => {
    const currentUserData = useSelector(currentUser);
    const { username, id } = user;

    const isActive = () => id === currentUserData?.id;

    const usersClasses = cn('user', {
        'current-user': isActive(),
    });

    return (
        <li className={usersClasses} onClick={onClick} >
              {username}
        </li>
    );
}
 
export default User;