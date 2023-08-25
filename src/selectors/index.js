import { usersAdapter } from "../slices/usersSlice";

const usersSelector = usersAdapter.getSelectors((state) => state.users);

const currentUser = (state) => (
    usersSelector.selectById(state, state.users.currentUserId));

export {
    usersSelector,
    currentUser,
}