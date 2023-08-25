import axios from 'axios';
import { createContext } from 'react';
import { useDispatch } from 'react-redux';


export const PostDataContext = createContext({});

const PostDataContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getPostsData = async (userId) => {
    // const path = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response;
  };

  return (
    <PostDataContext.Provider value={{
      getPostsData,
    }}
    >
      {children}
    </PostDataContext.Provider>
  );
};

export default PostDataContextProvider;