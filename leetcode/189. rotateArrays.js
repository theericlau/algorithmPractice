/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.



*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var array = [1, 2, 3, 4, 5, 6, 7];
[4, 2, 3, 1, 5, 6, 7]
let array1 = [1];
var rotate = function (nums, k) {
  let kPoint = nums.length - k;
  let begin = 0;
  while (kPoint < nums.length && kPoint !== begin) {
    swap(nums, kPoint, begin);
    swap(nums, kPoint, k);
    begin++;
    kPoint++;
    k++;
  }

  return nums;
};

var swap = (array, one, two) => {
  [array[one], array[two]] = [array[two], array[one]];
}

console.log(rotate(array, 4))
// console.log(rotate(array1, 1));