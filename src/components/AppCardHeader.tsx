import { FaRegEdit } from 'react-icons/fa';
import { setCurrentModalType } from '../slices/modalWindowsSlice';
import { openModalWindow } from '../slices/modalWindowsSlice';
import { IUser } from '../interfaces';
import { FC } from 'react';
import { useAppDispatch } from '../hooks';
import { useAppSelector } from '../hooks';
import { currentUser } from '../selectors';

const AppCardHeader: FC = () => {
  const dispatch = useAppDispatch();
  const currentUserData = useAppSelector(currentUser) ?? null;

  const handleClick = () => {
    dispatch(setCurrentModalType('add'));
    dispatch(openModalWindow());
  };

  if (currentUserData === null) {
    return (
      <div className="user-info">
        <p>Change user to watch their posts</p>
      </div>
    );
  }

  return (
    <div className="user-info">
      <ul className="user-info__list">
        <li>
          <b>Posts created by:</b> {currentUserData.username} (
          {currentUserData.name})
        </li>
        <li>
          <b>Website:</b> {currentUserData.website}
        </li>
      </ul>

      <button className="add-post" onClick={handleClick}>
        <FaRegEdit />
        <p className="add-post__btn-text">
          new <br />
          post
        </p>
      </button>
    </div>
  );
};

export default AppCardHeader;
