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

    case 'CATEGORY_REMOVE':
      // payload is a category!

      // delete expenses from that category
      return state.filter(exp =>
          exp.categoryID !== payload._id);

      // or remove references to the category
      return state.map(exp => {
        if (exp.categoryID === payload._id) {
          exp = {...exp}; // clone exp to remove its category
          exp.categoryID = null;
        }
        return exp;
      }

    default:
      return state;
  }
};
