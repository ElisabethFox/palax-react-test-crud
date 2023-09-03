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

const currentUsers = (state: RootState) => {
  if (state.users.currentUsersIds === null) {
    return null;
  }
  return state.users.currentUsersIds.map((id) => usersSelector.selectById(state, id));
};

export { usersSelector, postsSelector, postsIdsSelector, currentUsers };
