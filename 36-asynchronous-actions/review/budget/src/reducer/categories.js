const initialState = [];

export default (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case 'CATEGORY_ADD':
      return state.concat([payload]);
      // Or spread:
      // return [...state, payload];
    case 'CATEGORY_UPDATE':
      return state.map(cat =>
        cat._id === payload._id ? payload : cat);
    default:
      return state;
  }
};
