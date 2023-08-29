import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import fetchUsersData from '../thunks/fetchUsersData';
import { IUser } from '../interfaces';

const usersAdapter = createEntityAdapter<IUser>({});
const initialState = usersAdapter.getInitialState({
  currentUserId: '',
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }: PayloadAction<string>) => {
      state.currentUserId = payload;
    },
    removeUser: (state, { payload }: PayloadAction<string>) => {
      if (state.currentUserId === payload) {
        state.currentUserId = '';
      }
      usersAdapter.removeOne(state, payload);
    },
    renameUser: usersAdapter.updateOne,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsersData.fulfilled, (state, { payload }) => {
      usersAdapter.setAll(state, payload);
    });
  },
});

export const { setCurrentUser, removeUser, renameUser } = usersSlice.actions;
export { usersAdapter };
export default usersSlice.reducer;
