import { Provider } from 'react-redux';
import App from './components/App.tsx';
import store from './slices';
import UserDataContextProvider from './context/userDataContext';
import PostsContextProvider from './context/postsContext';

const init = () => {
    return (
        <Provider store={store}>
            <UserDataContextProvider>
                <PostsContextProvider>
                    <App />
                </PostsContextProvider>
            </UserDataContextProvider>
        </Provider>
    )
};

export default init;