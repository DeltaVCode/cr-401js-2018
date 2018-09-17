'use strict';

const socketPool = require('../../src/lib/socket-pool');

describe('socket-pool', () => {
  it('can add and remove users', () => {
    socketPool.addUser({ id: 1 });
    socketPool.addUser({ id: 2 });

    var userIds = []
    socketPool.forEach(user => userIds.push(user.id));
    expect(userIds).toEqual([1,2]);

    socketPool.removeUser({ id: 1 });

    userIds = []
    socketPool.forEach(user => userIds.push(user.id));
    expect(userIds).toEqual([2]);
  });
});