import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsersData = createAsyncThunk(
  'fetchUsersData',
  async (getUsersData, { rejectWithValue }) => {
    try {
      const { data } = await getUsersData();
      return data;
    } catch (error) {
      if (error.isAxiosError) {
        return rejectWithValue(error.response.status);
      }
      throw error;
    }
  },
);

export default fetchUsersData;