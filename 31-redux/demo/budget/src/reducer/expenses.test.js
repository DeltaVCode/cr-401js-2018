import deepFreeze from 'deep-freeze';

import reducer from './expenses';

describe('expenses reducer', () => {
  it('returns initial state', () => {
    let res = reducer();
    expect(res).toEqual([]);
  });

  it('returns current state given unknown action', () => {
    const state = ['hi'];
    const action = {
      type: 'UNKNOWN',
    };

    deepFreeze(state);
    deepFreeze(action);

    let res = reducer(state, action);
    expect(res).toBe(state);
  });
})