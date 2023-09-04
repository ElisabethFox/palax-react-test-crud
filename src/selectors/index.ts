import { usersAdapter } from '../slices/usersSlice';
import { postsAdapter } from '../slices/postsSlice';
import { RootState } from '../slices';

const usersSelector = usersAdapter.getSelectors(
  ({ users }: RootState) => users
);
const postsSelector = postsAdapter.getSelectors(
  ({ posts }: RootState) => posts
);

const currentUsers = (state: RootState) =>
  state.users.currentUsersIds.map((id) => usersSelector.selectById(state, id));

export { usersSelector, postsSelector, currentUsers };
