import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from './interfaces';

const fetchUsersData = createAsyncThunk<
  IUser[],
  undefined,
  { rejectValue: string }
>('fetchUsersData', async (_, { rejectWithValue }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    return rejectWithValue('Network Error!');
  }

  const data = await response.json();

  return data;
});

export default fetchUsersData;
