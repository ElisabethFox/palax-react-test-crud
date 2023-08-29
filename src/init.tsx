import { Provider } from 'react-redux';
import App from './components/App.tsx';
import store from './slices';
import PostsContextProvider from './context/postsContext.js';
import { FC } from 'react';

const init: FC = () => {
  return (
    <Provider store={store}>
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </Provider>
  );
};

export default init;
