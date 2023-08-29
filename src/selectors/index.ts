import { usersAdapter } from "../slices/usersSlice";
import { RootState } from "../slices";

const usersSelector = usersAdapter.getSelectors((state: RootState) => state.users);
const postsSelector = usersAdapter.getSelectors((state: RootState) => state.posts);
const postsIdsSelector = usersAdapter.getSelectors((state: RootState) => state.posts);

const currentUser = (state: RootState) => (
  usersSelector.selectById(state, state.users.currentUserId)
);

export {
  usersSelector,
  postsSelector,
  postsIdsSelector,
  currentUser,
};
