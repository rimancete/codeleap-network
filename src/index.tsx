import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
