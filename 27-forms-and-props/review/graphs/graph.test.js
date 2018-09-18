const Graph = require('./graph');

describe('Graph', () => {
    it ('can construct graph', () => {
        var graph = new Graph();

        graph.addNode('A');
        graph.addNode('B');
        graph.addNode('C');
        graph.addNode('D');
        graph.addNode('E');

        graph.addEdge('A', 'B');
        graph.addEdge('B', 'C');
        graph.addEdge('B', 'D');
        graph.addEdge('C', 'A');
        graph.addEdge('C', 'E');

        var result = graph.bft('A');
        expect(result).toEqual(['A', 'B', 'C', 'D', 'E']);
    })
})