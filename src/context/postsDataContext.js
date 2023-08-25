import axios from 'axios';
import { createContext } from 'react';
import { useDispatch } from 'react-redux';


export const PostDataContext = createContext({});

const PostDataContextProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getPostsData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com//posts/1');
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