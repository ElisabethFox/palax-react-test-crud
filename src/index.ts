import ReactDOM from 'react-dom/client';
import './index.css';
import init from './init';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(init());
}
