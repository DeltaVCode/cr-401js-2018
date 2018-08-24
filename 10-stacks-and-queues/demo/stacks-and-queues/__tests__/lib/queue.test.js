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
    expect(queue.toArray()).toEqual([1]);

    queue.enqueue('dos');
    expect(queue.toArray()).toEqual([1, 'dos']);

    queue.enqueue({ tree: true });
    expect(queue.toArray()).toEqual([1, 'dos', { tree: true }]);

    // Uses Queue.inspect()
    console.log(queue);
    // Uses Queue.toString()
    console.log(`${queue}`);

    // Assert
    expect(queue.count).toBe(3);

    // Act
    expect(queue.dequeue()).toBe(1);
    expect(queue.toArray()).toEqual(['dos', { tree: true }]);

    expect(queue.dequeue()).toBe('dos');
    expect(queue.toArray()).toEqual([{ tree: true }]);

    expect(queue.dequeue()).toEqual({ tree: true });
    expect(queue.toArray()).toEqual([]);

    // Assert
    expect(queue.count).toBe(0);
  });
});
