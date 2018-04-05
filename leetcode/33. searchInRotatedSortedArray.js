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
  // debugger;
  let begin = 0;
  let end = nums.length - 1;
  let mid;
  //while mid is greater than end
  while (end - begin > 1) {
    //every time halve it
    mid = Math.floor((end + begin) / 2 );
    let current = nums[mid];
    let beginNum = nums[begin];
    let endNum = nums[end];
    //if (current mid= target) then return mid
    if (current === target) {
      return mid;
    }
    //if (begin < mid && target is greater than begin)
      // if target greater than mid) then set begin to mid
      // else set end to mid
    if (beginNum < current) {  //&& target > beginNum
      if (target > current || target < beginNum){
        begin = mid;
      } else {
        end = mid;
      }
    } else {
      if (target < current || target > endNum) {
        end = mid;
      } else {
        begin = mid;
      }
    }
  }
    //if (end > mid && target is greater than end)
    //else
      // target greater than end then end = mid
      //else
        //then set begin to mid

    //case of 2 number
  if (nums[begin] === target) {
    return begin;
  } else if (nums[end] === target) {
    return end;
  } else {
    return -1;
  }
}
  //return -1
  // return -1;

let test = [10,2,3,5, 6, 8, 9];
let test1 = [3,5,1];
// console.log(search(test, 8));
console.log(search(test1, 1));