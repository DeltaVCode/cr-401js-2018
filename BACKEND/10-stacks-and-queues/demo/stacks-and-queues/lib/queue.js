'use strict';

class Queue {
  constructor() {
    this.count = 0;
    this.values = [];

    // This is silly, but tests pass
    // this.dequeueIndex = 0;
  }

  enqueue(value) {
    this.values[this.count] = value;
    // this.values.push(value);
    this.count++;
  }

  dequeue() {
    this.count--;
    // How would we shift without shift?

    // This is silly, but tests pass
    // return this.values[this.dequeueIndex++];

    // This is a lot of code, but it works
    // return this.values.splice(0,1)[0];

    return this.values.shift();
  }

  // Change how console.log() renders this
  inspect() {
    return this.values;
  }

  toArray() {
    // This is silly, don't do it
    // return this.values.slice(this.dequeueIndex);

    return this.values;
  }

  // Change how queue is rendered as string
  toString() {
    return this.values.toString();
  }
}

module.exports = Queue;
