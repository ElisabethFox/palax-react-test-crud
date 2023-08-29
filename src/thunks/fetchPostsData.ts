import { createAsyncThunk } from '@reduxjs/toolkit';
import { IPost } from '../interfaces';

const fetchPostsData = createAsyncThunk<
  IPost[],
  undefined,
  { rejectValue: string }
>('fetchPostsData', async (_, { rejectWithValue }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    return rejectWithValue('Network Error!');
  }

  const data = await response.json();

  return data;
});

export default fetchPostsData;
