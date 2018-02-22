/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


*/
var nums = [2, 7, 11, 15];


var twoSums = function(nums, target) {
  let map = {};
  let result = [];
  for (let i = 0; i < nums.length; i++ ) {
    let neededValue = target - nums[i];
    if (nums[i] in map) {
      result.push(i);
      result.push(map[nums[i]]);
    } else {
      map[neededValue] = i;
    }
  }
  console.log(map);
  return result;
}

console.log(twoSums(nums, 18));