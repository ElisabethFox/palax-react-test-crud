import { useContext } from 'react';
import { UserDataContext } from '../context/userDataContext';
import { PostsContext } from '../context/postsContext';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import {RootState, AppDispatch} from '../slices/index';

export const useUsersData = () => useContext(UserDataContext);
export const usePostsData = () => useContext(PostsContext);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;