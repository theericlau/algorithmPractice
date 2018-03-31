/*
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  debugger;
  //make a loop that
    //swap next with current
    //make current into current.next.next
  if (!head || !head.next) {
    return head;
  }
  let next = head.next;
  let current = head;
  while (current && current.next) {
    let nextNode = current.next.next;
    swap(current, current.next);
    current = nextNode;
  }

  //return head's next
  return next
};

let swap = (node1, node2) => {
  if (node2.next){
    node1.next = node2.next.next;
  } else {
    node1.next = node2.next;
  }
  node2.next = node1;

}


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var A = new ListNode('A')
var B = new ListNode('B')
var C = new ListNode('C')
var D = new ListNode('D')

A.next = B;
B.next = C;
C.next = D;

console.log(swapPairs(A))





