import { Provider } from 'react-redux';
import App from './components/App.js';
import store from './slices/index.js';
import UserDataContextProvider from './context/userDataContext.js';
import PostsContextProvider from './context/postsContext.js';
import {FC} from "react";

const init: FC = () => {
  return (
    <Provider store={store}>
      <UserDataContextProvider>
        <PostsContextProvider>
          <App />
        </PostsContextProvider>
      </UserDataContextProvider>
    </Provider>
  );
};

export default init;
