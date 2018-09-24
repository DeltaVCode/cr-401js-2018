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

  it('adds expense', () => {
    const state = [{ title: 'test' }];
    const action = {
      type: 'EXPENSE_ADD',
      payload: { title: 'added' },
    };

    deepFreeze(state);
    deepFreeze(action);

    let res = reducer(state, action);
    expect(res).not.toBe(state); // redundant if we use deepFreeze
    expect(res).toEqual([
      { title: 'test' },
      { title: 'added' },
    ]);
  });

  it('updates expense', () => {
    // Arrange
    const state = [
      { _id: 1, title: 'uno' },
      { _id: 2, title: 'dos' },
    ];
    const action = {
      type: 'EXPENSE_UPDATE',
      payload: { _id: 1, title: 'UNO' },
    };

    deepFreeze(state);
    deepFreeze(action);

    // Act
    let res = reducer(state, action);

    // Assert
    expect(res).toEqual([
      { _id: 1, title: 'UNO' },
      { _id: 2, title: 'dos' },
    ]);
  })
})