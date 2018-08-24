'use strict';

var Stack = require('../../lib/stack');

describe('stack', () => {
  it('can push and pop in expected order', () => {
    var stack = new Stack();
    expect(stack.count).toBe(0);

    stack.push(1);
    expect(stack.toArray()).toEqual([1]);

    stack.push('dos');
    expect(stack.toArray()).toEqual(['dos', 1])

    stack.push({ tree: true });
    expect(stack.toArray()).toEqual([{ tree: true }, 'dos', 1])


    expect(stack.count).toBe(3);

    expect(stack.peek()).toEqual({ tree: true });
    // Should not change after peek
    expect(stack.toArray()).toEqual([{ tree: true }, 'dos', 1])
    expect(stack.count).toBe(3);

    expect(stack.pop()).toEqual({ tree: true });
    expect(stack.toArray()).toEqual(['dos', 1])

    expect(stack.pop()).toBe('dos');
    expect(stack.toArray()).toEqual([1]);

    expect(stack.pop()).toBe(1);
    expect(stack.toArray()).toEqual([]);

    expect(stack.count).toBe(0);
  });
});