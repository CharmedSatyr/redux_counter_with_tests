import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducer from './reducers/index';
const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
