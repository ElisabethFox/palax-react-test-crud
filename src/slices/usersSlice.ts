import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
  EntityState,
} from '@reduxjs/toolkit';
import fetchUsersData from '../thunks/fetchUsersData';
import { IUser } from '../interfaces';

const usersAdapter = createEntityAdapter<IUser>();

interface UsersState extends EntityState<IUser> {
  currentUsersIds: number[];
}

const initialState: UsersState = usersAdapter.getInitialState({
  currentUsersIds: [],
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }: PayloadAction<number>) => {
      state.currentUsersIds.push(payload);
    },
    resetCurrentUser: (state, { payload }: PayloadAction<number>) => {
      state.currentUsersIds = state.currentUsersIds.filter(
        (id) => id !== payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsersData.fulfilled, (state, { payload }) => {
      usersAdapter.setAll(state, payload);
    });
  },
});

export const { setCurrentUser, resetCurrentUser } = usersSlice.actions;
export { usersAdapter };
export default usersSlice.reducer;
