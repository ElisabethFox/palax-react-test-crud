import axios from 'axios';
import {createContext, ReactElement } from 'react';
import { addPost, deletePost, changePost } from '../slices/postsSlice';
import { useAppDispatch } from '../hooks';
import { IPost } from '../interfaces';

interface PostsContextValue {
  deleteCurrentPost: (id: number) => Promise<void>;
  changeCurrentPost: (id: number, data: string) => Promise<void>;
  createNewPost: (data: IPost) => Promise<void>;
}

export const PostsContext = createContext<PostsContextValue>({
  deleteCurrentPost: async () => {},
  changeCurrentPost: async () => {},
  createNewPost: async () => {},
});

interface PostsContextProviderProps {
  children: ReactElement;
}

const PostsContextProvider = ({ children }: PostsContextProviderProps) => {
  const dispatch = useAppDispatch();

  const deleteCurrentPost = async (id: number) => {
    const path = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await axios.delete(path);

    dispatch(deletePost(id));
  };

  const changeCurrentPost = async (id: number, data: string) => {
    const path = `https://jsonplaceholder.typicode.com/posts/${id}`;
    await axios.put(path, data);

    dispatch(changePost({ id, changes: { body: data } }));
  };

  const createNewPost = async (data: IPost) => {
    const path = `https://jsonplaceholder.typicode.com/posts`;
    await axios.post(path, data);

    dispatch(addPost(data));
  };

  return (
    <PostsContext.Provider
      value={{
        deleteCurrentPost,
        changeCurrentPost,
        createNewPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
