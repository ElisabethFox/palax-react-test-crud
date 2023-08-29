import { useEffect } from 'react';
import AppCard from './AppCard';
import fetchUsersData from '../thunks/fetchUsersData';
import fetchPostsData from '../thunks/fetchPostsData';
import ModalWindow from './modals/ModalWindow';
import { useAppDispatch } from '../hooks';

const App = () => {
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
};

export default App;
