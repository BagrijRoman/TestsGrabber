import { combineReducers } from 'redux';

import rootReducer from './root';

export default combineReducers({
  root: rootReducer,
});
