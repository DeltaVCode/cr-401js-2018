'use strict';

class ShiftUnshiftStack {
  constructor() {
    this.count = 0;
    this.values = [];
  }

  push(value) {
    this.values.unshift(value);
    this.count++;
  }

  peek() {
    return this.values[0];
  }

  pop() {
    this.count--;
    return this.values.shift();
  }

  toArray() {
    return this.values;
  }
}

module.exports = ShiftUnshiftStack;
