'use strict';

class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(value) {
        this.nodes.set(value, [])
    }

    addEdge(from, to, weight = null) {
        var fromEdges = this.nodes.get(from)
        if (!fromEdges) throw new Error('from not found!');

        var toEdges = this.nodes.get(to);
        if (!toEdges) throw new Error('to not found');

        fromEdges.push({ node: to, weight });
        // For undireceted, add the reverse, too:
        // toEdges.push({ node: from, weight });
    }

    bft(startValue) {
        var hasStart = this.nodes.has(startValue);
        if (!hasStart) throw new Error('startValue not found');

        var result = [];
        var queue = [startValue];
        while (queue.length) {
            let currentValue = queue[0];
            if (!result.includes(currentValue)) {
                result.push(currentValue);

                let edges = this.nodes.get(currentValue);
                edges.forEach(edge => queue.push(edge.node));
            }

            queue.shift(1);
        }

        return result;
    }
}

module.exports = Graph;
