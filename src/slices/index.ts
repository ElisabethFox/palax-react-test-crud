import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import postsReducer from './postsSlice';
import modalWindowReducer from './modalWindowsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    modal: modalWindowReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;