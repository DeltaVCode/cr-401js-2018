import { createStore } from 'redux';

// import expensesReducer from '../reducer/expenses';
import reducer from '../reducer';

export default () =>
  createStore(reducer,
    // Wire up Redux DevTools Chrome Extension
    // https://github.com/zalmoxisus/redux-devtools-extension
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
