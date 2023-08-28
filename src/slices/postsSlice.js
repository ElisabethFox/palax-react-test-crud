import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import fetchPostsData from '../fetchPostsData';

const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState();

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: postsAdapter.addOne,
    deletePost: (state, { payload }) => {
      postsAdapter.removeOne(state, payload);
    },
    changePost: postsAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsData.fulfilled, (state, { payload }) => {
      postsAdapter.setAll(state, payload);
    });
  },
});

export const { addPost, deletePost, changePost } = postsSlice.actions;
export { postsAdapter };
export default postsSlice.reducer;