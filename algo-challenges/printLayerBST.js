const printByLayerBST = (node) => {
  if (!node) {
    return;
  }
  let queue1 = [node];
  let queue2 = [];
  let i = 0;

  while (queue1.length > 0 || queue2.length > 0){
    // i = 0;
    if (queue1[0].left){
      queue2.push(queue1[0].left);
    }
    if (queue1[0].right){
      queue2.push(queue1[0].right);
    }
    queue1.shift();
    if (queue1.length === 0){
      queue1 = queue2;
      queue2 = [];
    }
  }
}

const printBottomUp = (node) => {
  if (!node) {
    return;
  }
  let queue = [node];
  let stack = [];
  while (queue.length > 0) {
    let current = queue.shift();
    stack.push(current);
    if (current.right) {
      queue.push(current.right);
    }
    if (current.left){
      queue.push(current.left);
    }
  }
  while (stack.length > 0){
    console.log(stack.pop());
  }
}

class BST {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right= null;
  }

  insertLeft(value) {
    this.left = new BST(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BST(value);
    return this.right;
  }
}

let one = new BST(1);
one.insertLeft(2);
one.insertRight(3);
one.left.insertLeft(4)
one.left.insertRight(5);
one.right.insertLeft(6);
one.right.insertRight(7);

printBottomUp(one);