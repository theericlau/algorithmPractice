/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 *
 *
 *
 A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
 */
var uniquePaths = function (m, n) {
  var map = [],
    temp,
    i,
    j;
  //init paths for horizontal
  //init paths for vertical
  for (i = 0; i < m; i++) {
    temp = [];
    map.push(temp);
  }

  for (i = 0; i < n; i++) {
    map[0][i] = 1;
  }

  for (i = 0; i < m; i++) {
    map[i][0] = 1;
  }
};