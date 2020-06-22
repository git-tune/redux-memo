import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import MemoStore from './store/Store';

ReactDOM.render(
  <Provider store={MemoStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
