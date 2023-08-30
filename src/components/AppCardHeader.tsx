import { setCurrentModalType } from '../slices/modalWindowsSlice';
import { openModalWindow } from '../slices/modalWindowsSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { currentUser } from '../selectors';
import { FaRegEdit } from 'react-icons/fa';

const AppCardHeader = () => {
  const dispatch = useAppDispatch();
  const currentUserData = useAppSelector(currentUser) ?? null;

  const handleClick = (): void => {
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

  const { username, name, website } = currentUserData;

  return (
    <div className="user-info">
      <ul className="user-info__list">
        <li>
          <b>Posts created by:</b> {username} ({name})
        </li>
        <li>
          <b>Website:</b> {website}
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
