import { Provider } from 'react-redux';
import App from './components/App';
import store from './slices';

const init = () => {
    return (
        <Provider store={store}>
            <App></App>
        </Provider>
    )
};

export default init;