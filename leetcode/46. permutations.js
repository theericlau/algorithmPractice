/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let init = [[]];
    var getPerm = (arr, nums, n) {
      //init result;
        //base case
        //if n = nums.length
        //stop recurse

        //let current = nums[n];

        //loop into outer nums
            //loop into inner nums
            //create a copy
            //insert current around the digits
            //push to result
        //return getPerm with result and next index


    }
    return getPerm(init, nums, 0);
};