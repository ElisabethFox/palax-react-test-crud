import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import {
  openModalWindow,
  setCurrentModalType,
  setRelevantPost,
} from '../../slices/modalWindowsSlice';
import { useDispatch } from 'react-redux';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const handleChangePost = (id) => {
    dispatch(setCurrentModalType('change'));
    dispatch(setRelevantPost(id));
    dispatch(openModalWindow());
  };

  const handleDeletePost = (id) => {
    dispatch(setCurrentModalType('delete'));
    dispatch(setRelevantPost(id));
    dispatch(openModalWindow());
  };

  return (
    <li className="post">
      <div className="post__header">
        <h5 className="post__title">{post.title.trim()}</h5>
        <div className="post-menu">
          <button
            className="post-icon"
            onClick={() => handleChangePost(post.id)}
          >
            <FaPencilAlt />
          </button>
          <button
            className="post-icon"
            onClick={() => handleDeletePost(post.id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <p>{post.body.trim()}</p>
    </li>
  );
};

export default Post;
