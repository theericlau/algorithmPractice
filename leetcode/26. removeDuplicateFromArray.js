/*
Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [1, 1, 2, 3, 3, 5];
// var removeDuplicates = function (nums) {
//   let begin = 0;
//   let next = 1;
//   //loop into the array
//   //if previous is the same as current remove
//   while (begin < nums.length){
//     if (nums[begin] === nums[next]) {
//       nums.splice(next, 1);
//     } else {
//       begin++
//       next++
//     }
//   }
//   return nums;
// };

var removeDuplicates = function(nums) {
  let length = 0;
  if (nums.length === 0 ) {
    return length;
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[length] === nums[i]) {
      continue;
    } else {
      nums[length + 1] = nums[i];
      length++;
    }
  }
  console.log(nums);
  return length + 1;
}


// var removeDuplicates = function (nums) {
//   var len = nums.length,
//     cur,
//     i, // original array's index
//     j; // new array's index

//   if (len === 0) {
//     return 0;
//   }

//   cur = nums[0];

//   for (i = 1, j = 0; i < len; i++) {
//     if (nums[i] !== cur) {
//       j++;
//       nums[j] = nums[i];
//       cur = nums[i];
//     }
//   }
//   console.log('im the array', nums);
//   return j + 1;
// };
console.log(removeDuplicates(nums));