import User from './User';
import { usersSelector } from '../../selectors';
import { setCurrentUser } from '../../slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FC } from 'react';

const UsersContainer: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSelector.selectAll) ?? null;

  const handleSetCurrentUser = async (id: string) => {
    dispatch(setCurrentUser(id));
  };

  return (
    <div className="users__container">
      <ul className="users__list">
        {users.map((user) => (
          <User
            user={user}
            key={user.id}
            onClick={() => handleSetCurrentUser(user.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default UsersContainer;
