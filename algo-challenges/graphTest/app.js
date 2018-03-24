import Graph from "./index";
const createNode = name => {
  console.log(name);
}

const connect = new Graph();
console.log(connect);
document.getElementById('buttonCreate').addEventListener("click", createNode);