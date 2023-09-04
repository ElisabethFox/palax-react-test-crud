import cn from 'classnames';
import { useAppSelector } from '../../hooks';
import { IUser } from '../../interfaces';

interface UserProps {
  user: IUser;
  onClick: () => void;
}

const User = ({ user, onClick }: UserProps) => {
  const currentUsersIdsData = useAppSelector(
    (state) => state.users.currentUsersIds
  );
  const { username, id } = user;

  const isActive = () => currentUsersIdsData.includes(id);

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
