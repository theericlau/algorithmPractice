/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var swap = (array, index1, index2) => (
  [array[index1], array[index2]] = [array[index2], array[index1]]
);

var sortColors = function (nums) {
  //have pointer of begin
  //have pointer of middle
  //have pointer of end
  let begin = 0;
  let middle = 0;
  let end = nums.length - 1;
  //loop into the nums
  while (middle <= end){
    //if current is 0
    //swap to front
    //increase begin
    //increase middle
    if (nums[middle] === 0) {
      swap(nums, begin, middle);
      begin++;
      middle++;
    }
    //if current is 1
    //increase middle
    else if (nums[middle] === 1) {
      middle++;
    }
    //if current is 2
    //swap to the end
    //swap to end
    else {
      swap(nums, middle, end);
      end--;
    }
  }
  return nums;
}
console.log(sortColors([1,2,0]))
// let begin = 0;
// let middle = 0;
// let end = 2;

// 1. [1, 2, 0 ]

// let begin = 0;
// let middle = 1;
// let end = 2;
// 2. [1, 0, 2]

// let begin = 0;
// let middle = 1;
// let end = 1;
// 3. [0, 1, 2];

// let begin = 1;
// let middle = 2;
// let end = 1;