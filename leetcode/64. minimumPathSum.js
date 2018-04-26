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
  let dpGrid = [];
  //init columns;
  for (let i = 0 ; i <grid.length; i++) {
    dpGrid.push([]);
    if ( i === 0) {
      dpGrid[0][i] = grid[0][i];
    } else {
      dpGrid[i][0] = dpGrid[i - 1][0] + grid[i][0];
    }
  }

  //init rows;
  for (let i = 1; i < grid[0].length; i++) {
    dpGrid[0][i] = grid[0][i] + dpGrid[0][i - 1];
  }

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      dpGrid[i][j] = Math.min(dpGrid[i][j - 1], dpGrid[i-1][j]) + grid[i][j];
    }
  }
  console.log(dpGrid);

};

var grid =
[[1, 3, 1],
[1, 5, 1],
[4, 2, 1]];

// var grid =
// [[1, 1, 1],
// [4, 2, 1],
// [4, 2, 6],
// [4, 1, 1]];

console.log(minPathSum(grid));