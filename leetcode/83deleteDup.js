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

 //Iteration solution;
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let cur = head;

  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
}


//Recursive Solution;
var deleteDuplicatesRec = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let next = head.next;
  if (head.val === next.val) {
    while (!next && next !== head.val) {
      next = next.next;
    }
    return deleteDuplicatesRec(next);
  } else {
    head.next = deleteDuplicatesRec(next);
    return head;
  }
}

1--> 1--> 2 ---> 3
