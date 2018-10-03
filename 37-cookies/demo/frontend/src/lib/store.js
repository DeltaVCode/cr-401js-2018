import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import authCookie from './auth-cookie';
import logger from './logger';
import reducer from '../reducer';

const middleware = [
  logger,
  thunk,
  authCookie,
];

export default () =>
  createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );
