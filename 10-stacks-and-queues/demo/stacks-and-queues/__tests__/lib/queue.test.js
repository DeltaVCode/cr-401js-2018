'use strict';

var Queue = require('../../lib/queue');

describe('queue', () => {
  it('can enqueue and dequeue in expected order', () => {
    // Arrange
    var queue = new Queue();

    // Assert
    expect(queue.count).toBe(0);

    // Act
    queue.enqueue(1);
    queue.enqueue('dos');
    queue.enqueue({ tree: true });

    // Assert
    expect(queue.count).toBe(3);

    // Act
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe('dos');
    expect(queue.dequeue()).toEqual({ tree: true });

    // Assert
    expect(queue.count).toBe(0);
  });
});
