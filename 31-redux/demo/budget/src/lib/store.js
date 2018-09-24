import { createStore } from 'redux';

// import expensesReducer from '../reducer/expenses';
import reducer from '../reducer';

export default () =>
  createStore(reducer);
