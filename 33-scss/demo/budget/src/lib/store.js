import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './logger';
import promiseMiddleware from './promise-middleware';
import expenseValidation from './expenses-validation';

// import expensesReducer from '../reducer/expenses';
import reducer from '../reducer';

const middleware = [
  logger,
  promiseMiddleware,
  expenseValidation,
];

export default () =>
  createStore(reducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );

