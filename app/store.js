import { createStore, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import toggleReducer from './reducers/toggleReducer';
import themeReducer from './reducers/themeReducer';
import history from './utils/history';

const store = createStore(
  combineReducers({
    toggler: toggleReducer,
    themeToggler: themeReducer,
    router: connectRouter(history),
  }),
  {},
);

export default store;
