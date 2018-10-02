import { combineReducers } from 'redux';

import auth from './auth';
import lists from './lists';

export default combineReducers({
  auth,
  lists,
});
