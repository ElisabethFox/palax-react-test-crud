import {
  openModalWindow,
  setCurrentModalType,
  setRelevantPost,
  setRelevantUser,
} from '../../slices/modalWindowsSlice';
import { useAppSelector } from '../../hooks';
import { currentUsers } from '../../selectors';
import { IPost } from '../../interfaces';
import { useAppDispatch } from '../../hooks';
import { FaPencilAlt, FaTrashAlt, FaRegEdit } from 'react-icons/fa';

interface PostProps {
  post: IPost;
}

const Post = ({ post }: PostProps) => {
  const dispatch = useAppDispatch();
  const { userId, id, title, body } = post;
  const currentUsersData = useAppSelector(currentUsers) ?? [];
  const currentUser = currentUsersData.find((user) => user?.id === userId);

  const handleAddPost = (id: number): void => {
    dispatch(setCurrentModalType('add'));
    dispatch(setRelevantUser(id));
    dispatch(openModalWindow());
  };

  const handleChangePost = (id: number): void => {
    dispatch(setCurrentModalType('change'));
    dispatch(setRelevantPost(id));
    dispatch(openModalWindow());
  };

  const handleDeletePost = (id: number): void => {
    dispatch(setCurrentModalType('delete'));
    dispatch(setRelevantPost(id));
    dispatch(openModalWindow());
  };

  return (
    <li className="post">
      <div className="user-info">
        <ul className="user-info__list">
          <li className="user-info__list-item">
            <b>Post created by:</b> {currentUser?.username} ({currentUser?.name}
            )
          </li>
          <li className="user-info__list-item">
            <b>Website: </b>
            <a href={'#'} className="website">
              {currentUser?.website}
            </a>
          </li>
        </ul>
        <button className="add-post__btn" onClick={() => handleAddPost(userId)}>
          <FaRegEdit className="add-post__icon" />
        </button>
      </div>
      <div className="post__header">
        <h6 className="post__title">{title.trim()}</h6>
        <div className="post-menu">
          <button
            className="post-menu-icon__btn"
            onClick={() => handleChangePost(id)}
          >
            <FaPencilAlt className="post-menu-icon" />
          </button>
          <button
            className="post-menu-icon__btn"
            onClick={() => handleDeletePost(id)}
          >
            <FaTrashAlt className="post-menu-icon" />
          </button>
        </div>
      </div>
      <p className="post__text">{body.trim()}</p>
    </li>
  );
};

export default Post;
