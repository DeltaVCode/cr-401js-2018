'use strict';

const Stack = require('./stack');

class Queue2 {
  constructor() {
    this._data = new Stack();
    this._backup = new Stack();
    this.count = 0;
  }

  enqueue(value) {
    this._data.push(value);
    this.count++;
  }

  dequeue() {
    if (!this._data.count)
      return undefined;

    while (this._data.count > 1) {
      this._backup.push(this._data.pop());
    }
    var result = this._data.pop();

    while (this._backup.count) {
      this._data.push(this._backup.pop());
    }

    this.count--;
    return result;
  }

  toArray() {
    return this._data.toArray().slice().reverse();
  }
}

module.exports = Queue2;
