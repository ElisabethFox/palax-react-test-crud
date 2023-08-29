import cn from 'classnames';
import { currentUser } from '../../selectors';
import { useAppSelector } from '../../hooks';

const User = ({ user, onClick }) => {
  const currentUserData = useAppSelector(currentUser);
  const { username, id } = user;

  const isActive = () => id === currentUserData?.id;

  const usersClasses = cn('user', {
    'current-user': isActive(),
  });

  return (
    <li className={usersClasses} onClick={onClick}>
      {username}
    </li>
  );
};

export default User;
