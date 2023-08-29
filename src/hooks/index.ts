import { useContext } from 'react';
import { PostsContext } from '../context/postsContext.tsx';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../slices';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePostsData = () => useContext(PostsContext);
