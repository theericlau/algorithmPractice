var expect = chai.expect;

describe('graph', function () {
  var graph;

  beforeEach(function () {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "deleteNode", "addEdge", "hasEdge", and "deleteEdge"', function () {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
    expect(graph.deleteNode).to.be.a('function');
    expect(graph.hasEdge).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.deleteEdge).to.be.a('function');
  });

  it('should store nodes when nodes are added', function() {
    graph.addNode('A');
    expect(graph.contains('A')).to.equal(true);
  });

  it('should delete node from storage when node is deleted', function(){
    graph.addNode('A');
    graph.addNode('B');
    graph.deleteNode('A');
    expect(graph.contains('B')).to.equal(true);
    expect(graph.contains('A')).to.equal(false);
  });

  it('should create edges between two nodes', function () {
    graph.addNode(2);
    graph.addNode(1);
    graph.addNode(3);
    graph.addEdge(3, 2);
    expect(graph.hasEdge(3, 2)).to.equal(true);
    expect(graph.hasEdge(3, 1)).to.equal(false);
  });

  it('should remove edges between nodes', function () {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.deleteEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function () {
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    graph.deleteNode(5);
    expect(graph.hasEdge(4, 5)).to.equal(false);
  });

});