import { useEffect } from "react";
import AppCard from "./AppCard";
import fetchUsersData from "../fetchUsersData";
import fetchPostsData from "../fetchPostsData";
import ModalWindow from "./modals/ModalWindow";
import { FC } from "react";
import { useAppDispatch } from "../hooks";


const App: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsersData());
        dispatch(fetchPostsData());
    }, []);

    return (
        <div className="app-container">
            <h1 className="main-title">USERS & POSTS</h1>
            <ModalWindow />
            <AppCard />
        </div>
    );
}
 
export default App;