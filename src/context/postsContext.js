import axios from 'axios';
import { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, changePost } from '../slices/postsSlice';


export const PostsContext = createContext({});

const PostsContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getPostsData = async () => {
    // const path = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response;
  };

  const deleteCurrentPost = async (id) => {
    const path = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await axios.delete(path);

    dispatch(deletePost(id));
  };

  const changeCurrentPost = async (id, data) => {
    const path = `https://jsonplaceholder.typicode.com/posts/${id}`;

    await axios.put(path, data);

    dispatch(changePost({ id, changes: { body: data }}));
  };


  return (
    <PostsContext.Provider value={{
      getPostsData,
      deleteCurrentPost,
      changeCurrentPost
    }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;