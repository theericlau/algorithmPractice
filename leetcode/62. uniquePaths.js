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

  //1 solution for vertical
  for (i = 0; i < n; i++) {
    map[0][i] = 1;
  }
  //1 solution for horizontal
  for (i = 0; i < m; i++) {
    map[i][0] = 1;
  }

  //for each grid inside you add sum of the previous
  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      map[i][j] = map[i - 1][j] + map[i][j - 1];
    }
  }

  return map[m - 1][n - 1];
};

//optimize for memoization