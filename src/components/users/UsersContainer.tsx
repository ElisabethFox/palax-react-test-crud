import User from './User';
import { usersSelector } from '../../selectors';
import { setCurrentUser, resetCurrentUser } from '../../slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

const UsersContainer = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSelector.selectAll);
  const currentUsersIdsData = useAppSelector((state) => state.users.currentUsersIds);

  const handleSetCurrentUser = async (id: number) => {
    if (currentUsersIdsData.includes(id)) {
      dispatch(resetCurrentUser(id));
    }

    if (!currentUsersIdsData.includes(id)) {
      dispatch(setCurrentUser(id));
    }
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
