import { usersAdapter } from "../slices/usersSlice";
import store from "../slices";

interface store {
  users any(): void {
    currentUserId: number;
  };
  posts: any;
}

const usersSelector = usersAdapter.getSelectors((state: store) => state.users);
const postsSelector = usersAdapter.getSelectors((state: store) => state.posts);
const postsIdsSelector = usersAdapter.getSelectors((state: store) => state.posts);

const currentUser = (state: store) => (
  usersSelector.selectById(state, state.users.currentUserId)
);

export {
  usersSelector,
  postsSelector,
  postsIdsSelector,
  currentUser,
};
