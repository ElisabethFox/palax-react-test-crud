import { useEffect } from "react";
import AppCard from "./AppCard";
import { useDispatch } from "react-redux";
import { useUsersData } from "../hooks";
import fetchUsersData from "../fetchUsersData";


const App = () => {
    const dispatch = useDispatch();
    const { getUsersData } = useUsersData();

    useEffect(() => {
        dispatch(fetchUsersData(getUsersData));
    }, [dispatch, getUsersData]);

    return (
        <div className="container">
            <h1 className="main-title">USERS & POSTS</h1>
            <AppCard />
        </div>
    );
}
 
export default App;