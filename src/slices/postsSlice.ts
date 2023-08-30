import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { IPost } from '../interfaces';
import fetchPostsData from '../thunks/fetchPostsData';

const postsAdapter = createEntityAdapter<IPost>();
const initialState = postsAdapter.getInitialState();

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: postsAdapter.addOne,
    deletePost: (state, { payload }: PayloadAction<number>) => {
      postsAdapter.removeOne(state, payload);
    },
    changePost: postsAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPostsData.fulfilled,
      (state, { payload }: PayloadAction<IPost[]>) => {
        postsAdapter.setAll(state, payload);
      }
    );
  },
});

export const { addPost, deletePost, changePost } = postsSlice.actions;
export { postsAdapter };
export default postsSlice.reducer;
