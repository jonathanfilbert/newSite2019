import { createStore, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import toggleReducer from './reducers/toggleReducer';
import themeReducer from './reducers/themeReducer';
import imageReducer from './reducers/imageReducer';
import history from './utils/history';

const store = createStore(
  combineReducers({
    toggler: toggleReducer,
    themeToggler: themeReducer,
    image: imageReducer,
    router: connectRouter(history),
  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
