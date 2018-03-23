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
    if (this.storage[node]) {
      delete this.storage[node];
    }
  }

  addEdge(node){

  }

  deleteEdge(node){

  }

  printDirects(){

  }

  printIndirects(){

  }
}

const connects = new Graph();
connects.addNode('A');
connects.addNode('B');
console.log(connects);
connects
console.log(connects);

