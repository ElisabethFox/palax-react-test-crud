import { useEffect } from "react";
import AppCard from "./AppCard";
import { useUsersData } from "../hooks";
import fetchUsersData from "../fetchUsersData";
import fetchPostsData from "../fetchPostsData";
import { usePostsData } from "../hooks";
import ModalWindow from "./modals/ModalWindow";
import { FC } from "react";
import { useAppDispatch } from "../hooks";


const App: FC = () => {
    const dispatch = useAppDispatch();
    const { getUsersData } = useUsersData();
    const { getPostsData } = usePostsData();

    useEffect(() => {
        dispatch(fetchUsersData(getUsersData));
        dispatch(fetchPostsData(getPostsData));
    }, [dispatch, getPostsData, getUsersData]);

    return (
        <div className="app-container">
            <h1 className="main-title">USERS & POSTS</h1>
            <ModalWindow />
            <AppCard />
        </div>
    );
}
 
export default App;