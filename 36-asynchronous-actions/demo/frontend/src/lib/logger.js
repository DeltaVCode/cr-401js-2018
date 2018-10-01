// Curried function!
// As opposed to: (store, next, action) => { ... }
export default store => next => action => {
  console.log('__ACTION__', action);
  try {
    var result = next(action);
    console.log('__STATE__', store.getState());
    return result;
  } catch (err) {
    console.error(err);
  }
};