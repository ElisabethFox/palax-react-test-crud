import { Provider } from 'react-redux';
import App from './components/App';
import store from './slices';
import UserDataContextProvider from './context/userDataContext';

const init = () => {
    return (
        <Provider store={store}>
            <UserDataContextProvider>
                <App />
            </UserDataContextProvider>
        </Provider>
    )
};

export default init;