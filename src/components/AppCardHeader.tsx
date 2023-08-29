import { FaRegEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setCurrentModalType } from '../slices/modalWindowsSlice';
import { openModalWindow } from '../slices/modalWindowsSlice';
import { IUser } from '../interfaces';
import { FC } from 'react';

interface AddCardHeaderProps {
  user: IUser;
}

const AppCardHeader: FC<AddCardHeaderProps> = ({ user }) => {
  const dispatch = useDispatch();
  const { username, name, website } = user;

  const handleClick = () => {
    dispatch(setCurrentModalType('add'));
    dispatch(openModalWindow());
  };

  if (user === null) {
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
