class Graph {
  constructor() {
    this.storage = {};
  }

  // Add a node to the graph, passing in the node's value.
  addNode(node) {
    if (!this.storage[node]){
      this.storage[node] = { [`${node + 1}`]: { edges: {}}};
    } else {
      let key = Object.keys(this.storage[node]);
      if (key.length === 3) {
        return "Too many names used";
      } else {
        for (let i = 1; i <= 3; i++) {
          if (key.indexOf(`${node + i}`) < 0){
            this.storage[node][`${node + i}`] = { edges: {} };
            break;
          }
        }
      }
    }
  }

  // Removes a node from the graph.
  deleteNode(node) {
    if (this.contains(node)) {
      // Removes edges between node to be deleted and all other connected nodes.
      for (let targetNode in this.storage[node[0]][node].edges) {
        this.deleteEdge(node, targetNode);
      }
      if (this.numNode(node[0]) === 1) {
        delete this.storage[node[0]];
      } else{
        delete this.storage[node[0]][node];
      }
    }
  }

  // Counts the number of nodes.
  numNode(node) {
    return Object.keys(this.storage[node]).length;
  }


  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  contains(node) {
    return this.storage[node[0]][node] ? true : false;
  }

  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  hasEdge(fromNode, toNode) {
    if (!this.contains(fromNode)) {
      return false;
    }
    return !!this.storage[fromNode[0]][fromNode].edges[toNode];
  }

  // Connects two nodes in a graph by adding an edge between them.
  addEdge(fromNode, toNode) {
    if (!this.contains(fromNode) || !this.contains(toNode)) {
      return;
    }

    // Add an edge to each node pointing to the other
    this.storage[fromNode[0]][fromNode].edges[toNode] = toNode;
    this.storage[toNode[0]][toNode].edges[fromNode] = fromNode;
  }

  // Remove an edge between any two specified (by value) nodes.
  deleteEdge(fromNode, toNode) {
    if (!this.contains(fromNode) || !this.contains(toNode)) {
      return;
    }

    // Remove edges from each node's edge list
    delete this.storage[fromNode[0]][fromNode].edges[toNode];
    delete this.storage[toNode[0]][toNode].edges[fromNode];
  }

  // Print all direct relationships.
  printDirects() {
    const storage = this.storage;
    let all = [];
    for (let node in storage) {
      for (let name in storage[node]) {
        let keys = Object.keys(storage[node][name].edges);
        if (keys.length > 0) {
          keys.forEach((key)=> {
            all.push([name, key])
          })
        } else {
          all.push([name]);
        }
      }
    }
    return all;
  }

  // Print all indirect relationships.
  printIndirects() {
    const storage = this.storage;
    let all = [];
    let length = Object.keys(storage).length;

    /// Inner recursion to create all permutations for indirect relationships
    const generateIndirect = (total, node, currentArr) => {
      currentArr.push(node);
      let keys = Object.keys(storage[node[0]][node].edges);

      //Push when there's no more indirect or when max jump hits 5
      if (currentArr.length === 6 || !keys.length || keys.every(elem => currentArr.indexOf(elem) > -1)) {
        all.push(currentArr);
        return;
      }
      for (let i = 0; i < keys.length; i++) {
        if (currentArr.indexOf(keys[i]) >= 0) {
          continue;
        } else {
          generateIndirect(total, keys[i], currentArr.concat());
        }
      }
    }
    for (let node in storage) {
      for (let name in storage[node]){
        generateIndirect(all, name, []);
      }
    }
    return all;
  }

  // Generate random nodes with multiple names for the graph.
  generateNode() {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < alpha.length; i++) {
      let multiple = getRandomInt(3) + 1;
      while (multiple > 0) {
        this.addNode(`${alpha[i]}`);
        multiple--;
      }
    }
  }

  // Generate edges for the nodes and makes sure there's no edges between same node
  generateEdges(){
    let keys = Object.keys(this.storage);
    //Randomly select toNode and fromNode
    for (let i= 0; i < 50; i++) {
      let nodes = _.sample(keys, 2);
      let toNode = _.sample(Object.keys(this.storage[nodes[0]]));
      let fromNode = _.sample(Object.keys(this.storage[nodes[1]]));
      this.addEdge(fromNode, toNode);
    }
  }


}

// Helper function for generateNode
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

