const logger = store => next => action => {
  console.log('__ACTION__', action);

  console.log('__STATE_BEFORE__', store.getState());

  try {
    let result = next(action);
    console.log('__STATE_AFTER__', store.getState());
    return result;
  } catch (error) {
    error.action = action;
    console.error('__ERROR__', error);
    return error;
  }
}

export default logger;
