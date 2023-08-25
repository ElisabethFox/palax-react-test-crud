import { Provider } from 'react-redux';
import App from './components/App';
import store from './slices';
import UserDataContextProvider from './context/userDataContext';
import PostDataContextProvider from './context/postsDataContext';

const init = () => {
    return (
        <Provider store={store}>
            <UserDataContextProvider>
                <PostDataContextProvider>
                    <App />
                </PostDataContextProvider>
            </UserDataContextProvider>
        </Provider>
    )
};

export default init;