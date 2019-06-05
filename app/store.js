import { createStore, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import toggleReducer from './reducers/toggleReducer';
import history from './utils/history';

const store = createStore(
  combineReducers({ toggler: toggleReducer, router: connectRouter(history) }),
  {},
);

export default store;
