import cn from 'classnames';
import { currentUser } from '../../selectors';
import { useAppSelector } from '../../hooks';
import { FC } from 'react';
import { IUser } from '../../interfaces';

interface UserProps {
  user: IUser;
  onClick: () => void;
}

const User = ({ user, onClick }: UserProps) => {
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
