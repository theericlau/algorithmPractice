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
    var getPerm = (arr, nums, n) => {
      //init result;
      let result = [];
        //base case
      if (n === nums.length) {
        return arr;
      }
        //if n = nums.length
        //stop recurse
      let current = nums[n];
        //let current = nums[n];

        //loop into outer nums
      for (let i = 0; i < arr.length ; i++ ){
        for (let j = 0; j <= arr[0].length; j++) {
          let copy = arr[i].slice();
          copy.splice(j, 0, current);
          result.push(copy);
        }
      }
            //loop into inner nums
            //create a copy
            //insert current around the digits
            //push to result
        //return getPerm with result and next index
      return getPerm(result, nums, n+1);
    }
    return getPerm(init, nums, 0);
};

console.log(permute([1,2]));