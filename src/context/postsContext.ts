import axios from 'axios';
import { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, deletePost, changePost } from '../slices/postsSlice';

export const PostsContext = createContext({});

const PostsContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getPostsData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response;
  };

  const deleteCurrentPost = async (id: number) => {
    const path = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await axios.delete(path);

    dispatch(deletePost(id));
  };

  const changeCurrentPost = async (id: number, data: any) => {
    const path = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await axios.put(path, data);

    dispatch(changePost({ id, changes: { body: data }}));
  };

  const createNewPost = async (data: any) => {
    const path = `https://jsonplaceholder.typicode.com/posts`;
    await axios.post(path, data);

    dispatch(addPost(data));
  };


  return (
    <PostsContext.Provider value={{
      getPostsData,
      deleteCurrentPost,
      changeCurrentPost,
      createNewPost
    }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;