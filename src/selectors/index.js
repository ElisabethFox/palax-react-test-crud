import { usersAdapter } from "../slices/usersSlice";

const usersSelector = usersAdapter.getSelectors((state) => state.users);

export default usersSelector;