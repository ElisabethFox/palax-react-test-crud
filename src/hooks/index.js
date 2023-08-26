import { useContext } from 'react';
import { UserDataContext } from '../context/userDataContext';
import { PostsContext } from '../context/postsContext';

export const useUsersData = () => useContext(UserDataContext);
export const usePostsData = () => useContext(PostsContext);