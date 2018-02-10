import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import { rootReducerInitialState } from './const';

const appMode = process.env.ENV.replace('"', '');

const initMiddlevare = (mode) => {
  const middleware = [
    applyMiddleware(thunk),
  ];

  if (mode === 'development') {
    middleware.push(applyMiddleware(createLogger()));
  }
  return compose(...middleware);
};

const initialState = {
  root: rootReducerInitialState,
};

export default createStore(
  reducers,
  initialState,
  initMiddlevare(appMode),
);
