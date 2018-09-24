const initialState = [];

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case 'EXPENSE_ADD':
      return state.concat([payload]);
      // Or spread:
      // return [...state, payload];
    case 'EXPENSE_UPDATE':
      return state.map(exp =>
        exp._id === payload._id ? payload : exp);
    default:
      return state;
  }
};
