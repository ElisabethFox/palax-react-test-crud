import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import fetchUsersData from '../fetchUsersData';

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
  currentUserId: null,
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUserId = payload;
    },
    removeUser: (state, { payload }) => {
      if (state.currentUserId === payload) {
        state.currentUserId = null;
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

export const {
  setCurrentUser,
  removeUser,
  renameUser,
} = usersSlice.actions;
export { usersAdapter };
export default usersSlice.reducer;