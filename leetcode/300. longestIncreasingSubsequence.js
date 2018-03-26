/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?

[10, 20, 50, 16, 11, 12, 13, 14]

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  //init length
  let length = 0;
  //loop into array to keep track of beginning of subsequence
    //init count to 1
    //init current to begin of array
    //loop into array to keep check if next is larger
      //if larger
        //set current to this #
        //increment count

  for (let i = 0; i < nums.length; i++){
    let count = 1;
    let current = nums[i];
    for (let j= i + 1; j < nums.length; j++){
      if (nums[j] > current) {
        current = nums[j];
        count++;
      }
    }
    if (count > length) {
      length = count;
    }
  }
    //if count > length
      //set length to count
  //return length
  return length;
};


//dynamic approach
var lengthOfLIS2 = function(nums) {
  //init memoized way
  //init max
  //loop into array to keep track of end
    //loop into array to check if smaller than end
      //if smaller than end then max
        //check if it is longest is greater than what it is currently at;
    //if this length is bigger than current max then replace
  //return max
}




let test = [10, 9, 2, 5, 3, 7, 101, 18];
let test2 = [10, 20, 50, 16, 11, 12, 13, 14];

console.log(lengthOfLIS2(test2));