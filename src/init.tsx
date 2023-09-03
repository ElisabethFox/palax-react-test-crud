import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import store from './slices';
import PostsContextProvider from './context/postsContext';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

const init = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PostsContextProvider>
          <App />
        </PostsContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default init;
