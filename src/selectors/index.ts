import { usersAdapter } from '../slices/usersSlice';
import { RootState } from '../slices';
import { postsAdapter } from '../slices/postsSlice';

const usersSelector = usersAdapter.getSelectors(
  ({ users }: RootState) => users
);
const postsSelector = postsAdapter.getSelectors(
  ({ posts }: RootState) => posts
);
const postsIdsSelector = postsAdapter.getSelectors(
  ({ posts }: RootState) => posts
);

const currentUser = (state: RootState) => {
  if (state.users.currentUserId === null) {
    return null;
  }
  return usersSelector.selectById(state, state.users.currentUserId);
};

export { usersSelector, postsSelector, postsIdsSelector, currentUser };
