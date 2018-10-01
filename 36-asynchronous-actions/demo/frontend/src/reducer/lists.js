import * as actions from '../actions/lists';

const initialState = null;

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case actions.LIST_SET:
      return payload;
    default:
      return state;
  }
}
