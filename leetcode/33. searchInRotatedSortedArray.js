/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //init the begin, end and mid index
  //while mid is greater than end
    //every time halve it
    //if (current mid= target) then return mid
    //if (begin < mid && target is greater than begin)
      // if target greater than mid) then set begin to mid
      // else set end to mid
    //if (end > mid && target is greater than end)
    //else
      // target greater than end then end = mid
      //else
        //then set begin to mid
  //return -1
};