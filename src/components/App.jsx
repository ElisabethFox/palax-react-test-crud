import { useEffect } from "react";
import AppCard from "./AppCard";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {

    });

    return (
        <div className="container">
            <h1 className="main-title">USERS & POSTS</h1>
            <AppCard />
        </div>
    );
}
 
export default App;