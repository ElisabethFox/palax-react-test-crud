import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchUsersData from '../fetchUsersData';
import { IUser, IUsersState } from '../interfaces';

const usersAdapter = createEntityAdapter<IUser>({
  selectId: (user: IUser) => user.id,
});

const initialState: IUsersState = usersAdapter.getInitialState({ 
  currentUserId: null,
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
        state.currentUserId = null;
      }
      usersAdapter.removeOne(state, payload);
    },
    renameUser: usersAdapter.updateOne,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsersData.fulfilled, (state, { payload }: PayloadAction<IUser[]>) => {
      usersAdapter.setAll(state, payload);
    });
  },
});

export const { setCurrentUser, removeUser, renameUser } = usersSlice.actions;
export { usersAdapter };
export default usersSlice.reducer;