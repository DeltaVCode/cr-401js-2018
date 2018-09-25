import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './logger';
import promiseMiddleware from './promise-middleware';

// import expensesReducer from '../reducer/expenses';
import reducer from '../reducer';

export default () =>
  createStore(reducer,
    composeWithDevTools(
      applyMiddleware(
        logger,
        promiseMiddleware
      )
    )
  );

