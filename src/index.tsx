import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { env } from './environments';
import { Posts } from './pages/Posts';

import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={env.ROUTER_UTILS.base.home} element={<Home />} />
            <Route path={env.ROUTER_UTILS.base.posts} element={<Posts />}>
              <Route path={':username'} element={<Posts />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      <Toaster position="top-right" />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
