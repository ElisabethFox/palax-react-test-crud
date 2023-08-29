import { usersAdapter } from "../slices/usersSlice";
import { RootState } from "../slices";
import { postsAdapter } from "../slices/postsSlice";

const usersSelector = usersAdapter.getSelectors((state: RootState) => state.users);
const postsSelector = postsAdapter.getSelectors((state: RootState) => state.posts);
const postsIdsSelector = postsAdapter.getSelectors((state: RootState) => state.posts);

const currentUser = (state: RootState) => (
  usersSelector.selectById(state, state.users.currentUserId)
);

export {
  usersSelector,
  postsSelector,
  postsIdsSelector,
  currentUser,
};
