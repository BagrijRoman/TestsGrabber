import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { MainPage } from './pages';


export default () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);
