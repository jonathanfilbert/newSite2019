import { createStore, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import toggleReducer from './reducers/toggleReducer';
import themeReducer from './reducers/themeReducer';
import imageReducer from './reducers/imageReducer';
import history from './utils/history';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  combineReducers({
    toggler: toggleReducer,
    themeToggler: themeReducer,
    image: imageReducer,
    router: connectRouter(history),
  }),
  persistedState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
