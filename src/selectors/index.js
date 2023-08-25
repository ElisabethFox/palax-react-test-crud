import { usersAdapter } from "../slices/usersSlice";

const usersSelector = usersAdapter.getSelectors((state) => state.users);
const postsSelector = usersAdapter.getSelectors((state) => state.posts);

const currentUser = (state) => (
    usersSelector.selectById(state, state.users.currentUserId));

export {
    usersSelector,
    postsSelector,
    currentUser,
}