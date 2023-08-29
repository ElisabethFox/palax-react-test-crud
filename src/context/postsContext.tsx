import axios from 'axios';
import { FC, ComponentType, createContext } from 'react';
import { addPost, deletePost, changePost } from '../slices/postsSlice';
import { useAppDispatch } from '../hooks';

interface PostData {
  id?: string;
  title: string;
  body: string;
  userId: string;
}

interface PostsContextValue {
  deleteCurrentPost: (id: string) => Promise<void>;
  changeCurrentPost: (id: string, data: PostData) => Promise<void>;
  createNewPost: (data: PostData) => Promise<void>;
}

export const PostsContext = createContext<PostsContextValue>({
  deleteCurrentPost: async () => {},
  changeCurrentPost: async () => {},
  createNewPost: async () => {},
});

interface PostsContextProviderProps {
  children: ComponentType;
};

const PostsContextProvider: FC<PostsContextProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const deleteCurrentPost = async (id: string) => {
    const path = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await axios.delete(path);

    dispatch(deletePost(id));
  };

  const changeCurrentPost = async (id: string, data: PostData) => {
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