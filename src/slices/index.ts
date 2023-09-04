import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer from './usersSlice';
import postsReducer from './postsSlice';
import modalWindowReducer from './modalWindowsSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  modal: modalWindowReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
