/**
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.



 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// var addTwoNumbers = function (l1, l2) {
//   let newHead,
//   newTail,
//   remainder,
//   tens = 0;

//   while (l1 || l2) {
//     let value1 = l1 ? l1.val : 0;
//     let value2 = l2 ? l2.val : 0;
//     let sumVal = value1 + value2;
//     let remainder = sumVal % 10;
//     if (!newHead) {
//       newHead = new ListNode(remainder);
//       newTail = newHead;
//     } else {
//       newTail.next = new ListNode(remainder + tens);
//       newTail = newHead.next;
//     }
//     if (Math.floor(sumVal / 10 >= 1)) {
//       tens = Math.floor(sumVal / 10);
//     } else {
//       tens = 0;
//     }
//     l2 = l2.next;
//     l1 = l1.next;
//   }
//   return newHead;
// };


var addTwoNumbers = function (l1, l2) {
  let newHead,
    newTail,
    remainder,
    tens = 0;

  while (l1 || l2) {
    let value1 = l1 ? l1.val : 0;
    let value2 = l2 ? l2.val : 0;
    let sumVal = value1 + value2 + tens;
    let remainder = sumVal % 10;
    if (!newHead) {
      newHead = new ListNode(remainder);
      newTail = newHead;
    } else {
      newTail.next = new ListNode(remainder);
      newTail = newTail.next;
    }
    if (Math.floor(sumVal / 10 >= 1)) {
      tens = Math.floor(sumVal / 10);
    } else {
      tens = 0;
    }
    l2 = l2 ? l2.next : l2;
    l1 = l1 ? l1.next : l1;
  }

  if (tens > 0) {
    newTail.next = new ListNode(tens);
  }
  return newHead;
};


var a = new ListNode(2);
var b = new ListNode(4);
var c = new ListNode(3);

var d = new ListNode(5);
var e = new ListNode(6);
var f = new ListNode(4);

a.next = b;
b.next = c;

d.next = e;
e.next = f;

console.log(addTwoNumbers(a, d));