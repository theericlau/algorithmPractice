/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// const mergeTrees = (t1, t2) => {
//     let finalTreeVal = [];
//     let finalTree = [];
//     // let root = new TreeNode(t1.val + t2.val);
//     // finalTreeVal.push(root.val);
//     // finalTreeVal.push(root);
//     merge(finalTreeVal, finalTree, t1.val, t2.val)

//     left1 = t1.left;
//     left2 = t2.left;
//     right1 = t1.right;
//     right2 = t2.right;

//     while (left1 || left2|| right1 || right2) {
//         if (right1.right || right2.right) {
//             merge(finalTreeVal, finalTree, right1.val, right2.val);
//             right1 = right1.right;
//             right2 = right2.right;

//         } else if (left1.left || left2.left) {
//             merge(finalTreeVal, finalTree, left1.val, left2.val);
//             left1 = left1.left;
//             left2 = left2.left;
//         }
//     }

//     return finalTreeVal;
// }

// const merge = (valArray, treeArray, first, second) => {
//     const newTree = new TreeNode(first + second);
//     treeArray.push(newTree);
//     valArray.push(newTree.val);
// }




// var mergeTrees = function(t1, t2) {
//     if (t1 !== null || t2 !== null) {
//         const temp = new TreeNode();
//         let value = 0;
//         if (t1 !== null) {
//             console.log()
//             value += t1.value;
//         } else if (t2 !== null) {
//             value += t2.value;
//         }
//         console.log(value);
//     } else {
//         return null;
//     }
// //     const value = t1.val + t2.val;
// //     const t3 = new TreeNode(value);
// //     const recurse = (tree1, tree2) => {
// //         console.log('tree1');
// //         console.log('tree2');
// //         if (tree1.left !== null && ){

// //         }
// //     }
// //     recurse(t1, t2);
// //     console.log('t3', t3);
// };

function mergeTrees(t1, t2) {
  let treeVal = [];
  let tree = [];

  function merge(n1, n2) {
    if (!n1 && !n2) {
      tree.push(null);
      treeVal.push(null);
      return null;
    }

    let value = 0;

    if (n1 && n1.val) {
      value += n1.val;
    }

    if (n2 && n2.val) {
      value += n2.val;
    }

    const node = new TreeNode(value);
    tree.push(node);
    treeVal.push(node.val);

    node.left = merge(n1 ? n1.left : null, n2 ? n2.left : null);
    node.right = merge(n1 ? n1.right : null, n2 ? n2.right : null);

    return node;
  }

  merge(t1, t2);
  console.log(treeVal);
  console.log(tree);

  return treeVal;
}