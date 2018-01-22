import {createStore, combineReducers} from 'redux';
import someStuff from './some-stuff';

// Redux root reducer
const rootReducer = combineReducers({
  someStuff,
});

// Redux store
// http://redux.js.org/docs/basics/UsageWithReact.html#passing-the-store
const store = createStore(
  rootReducer,
  // Enable Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#1-with-redux
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

export default store;
