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
  })

});

describe('chia', function(){
  var chia;
})