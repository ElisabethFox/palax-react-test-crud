import { useContext } from 'react';
import { UserDataContext } from '../context/userDataContext';
import { PostDataContext } from '../context/postsDataContext';

export const useUsersData = () => useContext(UserDataContext);
export const usePostsData = () => useContext(PostDataContext);