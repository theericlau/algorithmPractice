/*

19. Remove Nth Node From End of List
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.

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
 * @param {number} n
 * @return {ListNode}
 */

//Two passes
var removeNthFromEnd = function (head, n) {
  //first pass go thru the whole list to check how long it is
  //loop into the list
    //increment counter
  //Set pointer to stop at counter -n
  //loop into the list again til it hits pointer
    //once it hits the pointer set the next to the next
  //return head
};