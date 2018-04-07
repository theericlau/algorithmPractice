const findSecondLargest = (rootNode) => {
  if (!rootNode || !rootNode.left && !rootNode.right){
    throw new Error('Tree must have 2 nodes');
  }
  let secondLargest = rootNode;
  let recurse = (node) => {
    // if (!node.right && !node.left){
    //   secondLargest = node
    // }
    // if (node.right){
    //   recurse(node.right);
    // } else if (!node.right && node.left) {
    //   if (!node.left.left && !node.left.right){
    //     secondLargest = node.left
    //   }
    //   recurse(node.left);
    // }

  }
  recurse(rootNode);
  return secondLargest;
}

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinaryTreeNode.prototype.insertLeft = function (value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};
BinaryTreeNode.prototype.insertRight = function (value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

const a = new BinaryTreeNode(5)
a.insertLeft(3)
a.insertRight(10);

a.left.insertLeft(1)
a.right.insertRight(4)

a.right.insertLeft(7)
a.right.insertRight(15)
a.right.right.insertLeft(12)

console.log(findSecondLargest(a));