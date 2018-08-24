'use strict';

class PushPopStack {
  constructor() {
    this.count = 0;
    this.values = [];
  }

  push(value) {
    this.values.push(value);
    this.count++;
  }

  peek() {
    return this.values[this.count - 1];
  }

  pop() {
    this.count--;
    return this.values.pop();
  }

  toArray() {
    // oops, reverse() mutates!
    // let's copy it first
    // Option 1: slice
    // return this.values.slice().reverse();

    // Option 2: destructure
    return [...this.values].reverse();
  }
}

module.exports = PushPopStack;
