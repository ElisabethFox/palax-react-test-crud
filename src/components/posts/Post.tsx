import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import {
  openModalWindow,
  setCurrentModalType,
  setRelevantPost,
} from '../../slices/modalWindowsSlice';
import { FC } from 'react';
import { IPost } from '../../interfaces';
import { useAppDispatch } from '../../hooks';

interface PostProps {
  post: IPost;
}

const Post: FC<PostProps> = ({ post }) => {
  const dispatch = useAppDispatch();
  const { id, title, body } = post;

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
      <div className="post__header">
        <h5 className="post__title">{title.trim()}</h5>
        <div className="post-menu">
          <button className="post-icon" onClick={() => handleChangePost(id)}>
            <FaPencilAlt />
          </button>
          <button className="post-icon" onClick={() => handleDeletePost(id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <p>{body.trim()}</p>
    </li>
  );
};

export default Post;
