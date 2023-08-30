import * as ReactDOM from 'react-dom';

import './index.css';
import init from './init';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(init());
}
