/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example 1:
[[1,3,1],
 [1,5,1],
 [4,2,1]]
Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  //keep track of total
  //do a breadth first search

};

var grid =
[[1, 3, 1],
[1, 5, 1],
[4, 2, 1]];

var grid =
[[1, 1, 1],
[4, 2, 1],
[4, 2, 6],
[4, 1, 1]];

console.log(minPathSum(grid));