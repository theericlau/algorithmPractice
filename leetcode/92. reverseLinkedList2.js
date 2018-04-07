/*

Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let count = 1;
  let current = head;
  let previous = null;
  while (count < m) {
    previous = current;
    current = current.next;
    count++;
  }
  if (m === 1) {
    return reverseLinkedList(current, previous, n - m);
  }
  if (n - m > 0) {
    previous.next = reverseLinkedList(current, previous, n - m);
    return head;
  }
  return head;
};

const reverseLinkedList = (head, previous, counter) => {
  if (!head) {
    return;
  }
  let end;
  let prev = previous;
  let current = head;
  let next;
  let count = counter;

  while (count >= 0) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count--;
  }
  head.next = next;
  return prev;
}


function ListNode(val) {
  this.val = val;
  this.next = null;
 }

let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
let e = new ListNode(5)

a.next = b
b.next = c
c.next = d
d.next = e

console.log(reverseBetween(a, 3, 4));