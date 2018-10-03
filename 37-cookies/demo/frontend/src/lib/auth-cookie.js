import Cookies from 'universal-cookie';
import * as actions from '../actions/auth';

export const COOKIE_NAME = 'AuthToken';

const cookies = new Cookies();

export default store => next => action => {
  switch(action.type) {
    case actions.TOKEN_SET:
      console.debug(`Setting ${COOKIE_NAME}`);
      cookies.set(COOKIE_NAME, action.payload, { path: '/' });
      break;

    case actions.TOKEN_DELETE:
      console.debug(`Removing ${COOKIE_NAME}`);
      cookies.remove(COOKIE_NAME, { path: '/' });
      break;

    case actions.TOKEN_FROM_COOKIE:
      var token = cookies.get(COOKIE_NAME);
      if (token) {
        console.debug(`Setting token from ${COOKIE_NAME}`);
        return next(actions.tokenSet(token));
      }
      break;

    default:
      break;
  }

  return next(action);
}
