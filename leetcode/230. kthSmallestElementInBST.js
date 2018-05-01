/*

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

Credits:
Special thanks to @ts for adding this problem and creating all test cases.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

function TreeNode(val) {
 this.val = val;
 this.left = this.right = null;
}

var kthSmallest = function (root, k) {
  let result = [];

  let traverse = (node) => {
    if (node.left) {
      traverse(node.left);
    }
    result.push(node.val)
    if (node.right) {
      traverse(node.right);
    }
  }

  traverse(root);
  return result[k - 1];
};

