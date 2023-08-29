import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
  EntityState
} from '@reduxjs/toolkit';
import fetchUsersData from '../thunks/fetchUsersData';
import { IUser } from '../interfaces';

const usersAdapter = createEntityAdapter<IUser>();

interface UsersState extends EntityState<IUser> {
  currentUserId: number | null;
};

const initialState: UsersState = usersAdapter.getInitialState({
  currentUserId: null,
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }: PayloadAction<number>) => {
        state.currentUserId = payload;
    },
    removeUser: (state, { payload }: PayloadAction<number>) => {
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

export const { setCurrentUser, removeUser, renameUser } = usersSlice.actions;
export { usersAdapter };
export default usersSlice.reducer;
