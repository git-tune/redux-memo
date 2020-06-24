import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { Reducer } from './reducers/index';
import App from './App';

// Redux-Rersist setting

const persistConfig = {
  key: 'memo',
  storage,
};

// Rersist Reducer

const persistedReducer = persistReducer(persistConfig, Reducer);

// Store Persister

let store = createStore(persistedReducer);
let pstore = persistStore(store);

// rendering

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={pstore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

export default pstore;
