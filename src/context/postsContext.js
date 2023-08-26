import axios from 'axios';
import { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../slices/postsSlice';


export const PostsContext = createContext({});

const PostsContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getPostsData = async () => {
    // const path = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response;
  };

  const deleteChangedPost = async (id) => {
    const path = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await axios.delete(path);

    dispatch(deletePost(id));
  };

  return (
    <PostsContext.Provider value={{
      getPostsData,
      deleteChangedPost
    }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;