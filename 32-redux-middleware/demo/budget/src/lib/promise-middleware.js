export default store => next => action => {
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