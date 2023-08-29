import { useEffect } from 'react';
import AppCard from './AppCard';
import fetchUsersData from '../thunks/fetchUsersData';
import fetchPostsData from '../thunks/fetchPostsData';
import ModalWindow from './modals/ModalWindow';
import { useAppDispatch } from '../hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
