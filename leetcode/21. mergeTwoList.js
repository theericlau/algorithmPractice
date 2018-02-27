/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4



*/

/**
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
var mergeTwoLists = function (l1, l2) {
  //init leftpointer
  let leftPoint = l1;
  //init rightpointer
  let rightPoint = l2;
  //init new List
  let newList;
  let head = null;
  //loop until l1 and l2 are null
  while (leftPoint || rightPoint) {
    //if newList is undefinied
    //set newList to equal whichever is smaller l1 or l2
    if (!newList) {
      if (!rightPoint || leftPoint && leftPoint.val <= rightPoint.val) {
        newList = new ListNode(leftPoint.val);
        leftPoint = leftPoint.next;
        head = newList;
      } else {
        newList = new ListNode(rightPoint.val);
        rightPoint = rightPoint.next;
        head = newList;
      }
    } else {
      //if leftpointer is less than rightpointer
      //set next of newlist to left pointer
      //increment leftpointer
      console.log('got in here', newList)
      if (!rightPoint || leftPoint && leftPoint.val <= rightPoint.val) {
        newList.next = new ListNode(leftPoint.val);
        leftPoint = leftPoint.next;
      } else {
        //if rightpointer is less than left
        //set next of newlist to right pointer
        //increment rightpointer
        newList.next = new ListNode(rightPoint.val);
        rightPoint = rightPoint.next;
      }
      newList = newList.next;
    }
  }
  //return newlist
  return head;
};