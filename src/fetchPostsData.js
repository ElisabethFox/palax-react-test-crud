import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPostsData = createAsyncThunk(
  'fetchPostsData',
  async (getPostsData, { rejectWithValue }) => {
    try {
      const { data } = await getPostsData();
      return data;
    } catch (error) {
      if (error.isAxiosError) {
        return rejectWithValue(error.response.status);
      }
      throw error;
    }
  },
);

export default fetchPostsData;