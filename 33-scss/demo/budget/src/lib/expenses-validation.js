import * as errorActions from '../action/error-actions';

export default store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case 'EXPENSE_ADD':
    case 'EXPENSE_UPDATE':
      if (!payload) {
        return store.dispatch(
          errorActions.validationError(
            'Missing expense information!'));
      }

      if (!payload.title) {
        return store.dispatch(
          errorActions.validationError(
            'Title is required!'));
      }

      if (!(payload.price > 0)) {
        return store.dispatch(
          errorActions.validationError(
            // App validation could be like this?
            // { name: 'price', message: '...' }
            'Price must be positive!'));
      }

      // otherwise we're good
      store.dispatch(errorActions.clearError());
      return next(action);

    default:
      return next(action);
  }
}