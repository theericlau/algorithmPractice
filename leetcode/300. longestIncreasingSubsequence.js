/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?


*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function (nums) {
  //init length
  //loop into array to keep track of beginning of subsequence
    //init count to 1
    //init current to begin of array
    //loop into array to keep check if next is larger
      //if larger
        //set current to this #
        //increment count
    //if count > length
      //set length to count
  //return length
};



let test = [10, 9, 2, 5, 3, 7, 101, 18];