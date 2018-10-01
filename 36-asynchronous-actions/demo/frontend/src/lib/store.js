import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from './logger';
import reducer from '../reducer';

const middleware = [
  logger,
];

export default () =>
  createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );
