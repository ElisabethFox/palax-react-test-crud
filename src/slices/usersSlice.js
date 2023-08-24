import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter();
const defaultUserId = 1;
const initialState = usersAdapter.getInitialState({
  currentUserId: defaultUserId,
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
        state.currentUserId = defaultUserId;
      }
      usersAdapter.removeOne(state, payload);
    },
    renameUser: usersAdapter.updateOne,
  },
});

export const {
  setCurrentUser,
  removeUser,
  renameUser,
} = usersSlice.actions;
export { usersAdapter };
export default usersSlice.reducer;