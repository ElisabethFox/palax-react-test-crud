import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import postsReducer from './postsSlice';
import modalWindowReducer from './modalWindowsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    modal: modalWindowReducer,
  },
});