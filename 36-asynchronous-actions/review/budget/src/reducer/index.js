import { combineReducers } from 'redux';

import categories from './categories';
import expenses from './expenses';
import error from './error';
// TODO: next reducer imported here

export default combineReducers({
  categories, // sets up { categories: [] } to be part of state
  expenses, // sets up { expenses: [] } to be part of state
  error,    // sets up { error: (null | Error) }
  // TODO: next reducer attached here
});
