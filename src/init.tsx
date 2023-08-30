import { Provider } from 'react-redux';
import App from './components/App';
import store from './slices';
import PostsContextProvider from './context/postsContext';

const init = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PostsContextProvider>
        <App />
      </PostsContextProvider>
    </Provider>
  );
};

export default init;
