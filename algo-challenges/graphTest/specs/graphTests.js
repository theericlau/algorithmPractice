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
    expect(graph.printDirects).to.be.a('function');
    expect(graph.printIndirects).to.be.a('function');
    expect(graph.generateNode).to.be.a('function');
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
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdge('B', 'C');
    expect(graph.hasEdge('B', 'C')).to.equal(true);
    expect(graph.hasEdge('C', 'A')).to.equal(false);
  });

  it('should remove edges between nodes', function () {
    graph.addNode('D');
    graph.addNode('E');
    graph.addEdge('D', 'E');
    expect(graph.hasEdge('D', 'E')).to.equal(true);
    graph.deleteEdge('D', 'E');
    expect(graph.hasEdge('D', 'E')).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function () {
    graph.addNode('C');
    graph.addNode('D');
    graph.addEdge('C', 'D');
    expect(graph.hasEdge('C', 'D')).to.equal(true);
    graph.deleteNode('D');
    expect(graph.hasEdge('C', 'D')).to.equal(false);
  });

  /*
  TODO:
  1. create tests for generate, printDirect, printIndirect
  */
  it('should print all direct edges', function(){
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    expect(graph.printDirects()).to.include([['A', 'B'], ['B','C'], ['C','A'], ['C','B']]);
  })

});