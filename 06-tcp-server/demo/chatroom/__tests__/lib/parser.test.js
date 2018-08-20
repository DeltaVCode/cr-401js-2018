'use strict';

const { parser } = require('../../src/lib/parser');

describe('parser', () => {
  it('parses @all messages', done => {
    parser('@all this is my message\r\n', (event, message) => {
      expect(event).toBe('@all');
      expect(message)
        .toBe('this is my message\r\n');
      done();
    });
  });

  it('emits @help given invalid input', done => {
    parser('@oops what am I doing?\r\n', (event) => {
      expect(event).toBe('@help');
      done();
    });
  });
});
