import { FaRegEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { openModalWindow, setCurrentModalType } from '../slices/modalWindowsSlice';

const UserInfo = ({ user }) => {
  const dispatch = useDispatch();

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
          <b>Posts created by:</b> {user.username} ({user.name})
        </li>
        <li>
          <b>Website:</b> {user.website}
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

export default UserInfo;
