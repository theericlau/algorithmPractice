var expect = chai.expect;

describe('graph', function () {
  var graph;

  beforeEach(function () {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "deleteNode", "addEdge", "hasEdge", "deleteEdge", "generateNode" and "generateEdges"', function () {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
    expect(graph.deleteNode).to.be.a('function');
    expect(graph.hasEdge).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.deleteEdge).to.be.a('function');
    expect(graph.printDirects).to.be.a('function');
    expect(graph.printIndirects).to.be.a('function');
    expect(graph.generateNode).to.be.a('function');
    expect(graph.generateEdges).to.be.a('function');
  });

  it('should store nodes when nodes are added', function() {
    graph.addNode('A');
    expect(graph.contains('A1')).to.equal(true);
  });

  it('should add node to wherever there is an open node', function () {
    graph.addNode('A');
    graph.addNode('A');
    graph.addNode('A');
    graph.deleteNode('A2');
    expect(graph.contains('A2')).to.equal(false);
    graph.addNode('A');
    expect(graph.contains('A2')).to.equal(true);
  });


  it('should delete node from storage when node is deleted', function(){
    graph.addNode('A');
    graph.addNode('A');
    graph.deleteNode('A1');
    expect(graph.contains('A1')).to.equal(false);
    expect(graph.contains('A2')).to.equal(true);
  });

  it('should create edges between two nodes', function () {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addEdge('B1', 'C1');
    expect(graph.hasEdge('B1', 'C1')).to.equal(true);
    expect(graph.hasEdge('C1', 'A1')).to.equal(false);
  });

  it('should remove edges between nodes', function () {
    graph.addNode('D');
    graph.addNode('E');
    graph.addEdge('D1', 'E1');
    expect(graph.hasEdge('D1', 'E1')).to.equal(true);
    graph.deleteEdge('D1', 'E1');
    expect(graph.hasEdge('D1', 'E1')).to.equal(false);
  });

  it('should remove edges between nodes when a node is removed', function () {
    graph.addNode('C');
    graph.addNode('D');
    graph.addEdge('C1', 'D1');
    expect(graph.hasEdge('C1', 'D1')).to.equal(true);
    graph.deleteNode('D1');
    expect(graph.hasEdge('C1', 'D1')).to.equal(false);
  });

});