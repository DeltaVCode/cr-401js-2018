export default store => next => action => {

  // redux-thunk
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  if (typeof action.then === 'function') {
    action
      .then(res => store.dispatch(res))
      .catch(err => {
        console.error(err);

        // Could dispatch an app error action?
        // store.dispatch({ })
      });
  } else {
    return next(action);
  }
}