/*
Introduction:
There is a group of people (lets say 30)
Each person has multiple names by which they can be identified. Lets say each person has atleast 1 name and 3 names max. Some may have only 1 name and some may have 3.
Each person is related to others in the group either DIRECTLY or INDIRECTLY. DIRECTLY means that persons knows the other person name. INDIRECTLY means the person knows a person who knows the other person. This could be
Single-hop, eg, A knows B know C

OR

Multi-hop eg: A knows B knows D knows E knows C. And it means A knows C via 3 hops

Since every person has multiple names, it could be that A knows C via
A3 -> B1 -> E3 -> D2 -> C2

                Where the number denotes one of the 3 names.

Only DIRECT relationships are specified on input
There could be people who are not related to anybody
There should be no loops in the relationship, ie A3 -> B1 -> E3 -> D2 -> E3 ->C2 where E3 shows up twice.


Problem statement
Display all the relationships EACH person has to others either DIRECTLY or INDIRECTLY using each of the 3 possible names.
The display can be simple text like shown in #4 above OR in some UI framework if that is easier

You are free to choose the programing language to implement this.

Please generate the input data for 30 people with max 5 hop relationships. This can be represented in any form (simple text, JSON etc). Where each person is defined as
A1 <-> C2
A1 <-> D3
A2 <-> B1

B2 <-> D1
D1 <-> C3
D2 <-> E1

F2 (eg of a person not related to anyone)
etc
*/

class Graph {
  constructor(){
    this.storage = {}
  }

  addNode(node){
    if (this.storage[node]) {
      return 'already in storage';
    } else {
      this.storage[node] = { edges : {}}
    }
  }

  deleteNode(node){
    if (this.contains(node)) {
      // Removes edges between node to be deleted and all other connected nodes.
      for (let targetNode in this.storage[node].edges) {
        this.deleteEdge(node, targetNode);
      }
      delete this.storage[node];
    }
  }

  contains(node) {
    return this.storage[node] ? true : false;
  }

  hasEdge(fromNode, toNode) {
    if (!this.contains(fromNode)) {
      return false;
    }
    return !!this.storage[fromNode].edges[toNode];
  }

  addEdge(fromNode, toNode){
    if (!this.contains(fromNode) || !this.contains(toNode)) {
      return;
    }

    // Add an edge to each node pointing to the other
    this.storage[fromNode].edges[toNode] = toNode;
    this.storage[toNode].edges[fromNode] = fromNode;
  }

  deleteEdge(fromNode, toNode){
    if (!this.contains(fromNode) || !this.contains(toNode)) {
      return;
    }

    // Remove edges from each node's edge list
    delete this.storage[fromNode].edges[toNode];
    delete this.storage[toNode].edges[fromNode];
  }

  printDirects(){
    const storage = this.storage;
    for (let node in storage) {
      let keys = Object.keys(storage[node].edges);
      if (keys.length > 0) {
        for (let edge in storage[node].edges){
          console.log([node, edge]);
        }
      } else {
        console.log([node]);
      }
    }
  }

  printIndirects(){
    const storage = this.storage;
    let all = [];
    let length = Object.keys(storage).length;

    const generateIndirect = (total, node, currentArr) => {
      currentArr.push(node);
      let keys = Object.keys(storage[node].edges);

      //Push when there's no more indirect or when max jump hits 5
      if (currentArr.length === 6 || !keys.length || keys.every(elem => currentArr.indexOf(elem) > -1)) {
        all.push(currentArr);
        return;
      }
      for (let i = 0; i < keys.length; i++) {
        if (currentArr.indexOf(keys[i]) >= 0) {
          continue;
        } else {
          // Recurse through each permutation
          generateIndirect(total, keys[i], currentArr.concat());
        }
      }
    }
    for (let node in this.storage) {
      generateIndirect(all, node, []);
    }
    return all;
  }

  generateNode(){
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < alpha.length; i++) {
      this.addNode(alpha[i]);
    }
  }
}


const connects = new Graph();
connects.generateNode(connects);

connects.addEdge('A','B');
connects.addEdge('B', 'C');
connects.addEdge('C', 'D');
connects.addEdge('C', 'E');
connects.addEdge('E', 'F');
connects.addEdge('F', 'A');
connects.addEdge('B', 'E');
// console.log(connects.printDirects());
console.log(connects.printIndirects());



var b = ["A","B","C","D"];
var a = ["C"];

// console.log(b.filter((node) => {
//   return a.indexOf(node) > -1;
// }).length === a.length)

console.log(a.every(elem => b.indexOf(elem) > -1))
