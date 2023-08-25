import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState();

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: postsAdapter.addOne,
    addPosts: postsAdapter.addMany,
  }
});

export const { addPosts } = postsSlice.actions;
export { postsAdapter };
export default postsSlice.reducer;