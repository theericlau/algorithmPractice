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

var twoSumsSet = function(arr, target) {
  let result = [];
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    //if value we're looking for is in Set
    if (set.has(target - arr[i])){
      //return true
      return true;
    }
    //if not add into the Set;
    set.add(arr[i]);
  }
  return false;
}


console.log(twoSumsSet(nums, 16));
