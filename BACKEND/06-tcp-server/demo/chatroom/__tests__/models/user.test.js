'use strict';

const User = require('../../src/models/user');

describe('User', () => {
  it('generates id', () => {
    var user = new User();

    expect.anything(user.id);
    expect(user.nickname).toBe(user.id);
  });
});
