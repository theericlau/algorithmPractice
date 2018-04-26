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

const permute2nd = (array) => {
  let results = [];

  const innerPermute = (currentPermute, arrayLeft) => {
    if (arrayLeft.length === 0) {
      const uniqPermutation = currentPermute.slice();
      results.push(uniqPermutation);
      return;
    }
    for (let i = 0; i < arrayLeft.length; i++) {
      //either use push pop method or create a shallow copy of the array so that it'll preserve original array
      let current = [arrayLeft[i]];
      currentPermute.push(current);
      // let newPermute = currentPermute.slice().concat(current);
      let newArray = arrayLeft.slice(0, i).concat(arrayLeft.slice(i+1));
      innerPermute(currentPermute, newArray);
      currentPermute.pop();
    }
  }
  innerPermute([], array);
  return results;
}
console.log(permute2nd([1,2,3]));


