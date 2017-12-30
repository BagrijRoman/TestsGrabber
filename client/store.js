import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const initMiddlevare = (mode) => {
  const middleware = [
    applyMiddleware(thunk),
  ];
  if (mode === 'development') {
    middleware.push(applyMiddleware(createLogger()));
  }
  return compose(...middleware);
};

const initialState = { };
const appMode = process.env.ENV;

export default createStore(
  reducers,
  initialState,
  initMiddlevare(appMode),
);
