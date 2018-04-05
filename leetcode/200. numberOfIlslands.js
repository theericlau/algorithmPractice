/*


Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011
Answer: 3

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  //init total
  debugger;
  let total = 0;
  for ( let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        total++;
        dfs(grid, i, j);
      }
    }
  }
  return total
  //loop into each array
    //check if adjacent are also 1s
      //if current is 1 increment total
        //recurse to turn adjacent ones into 0
  //return total
};

const dfs = (grid, i, j) => {
  if (i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] === "0") {
    return;
  }
  grid[i][j] = "0";
  dfs(grid, i-1, j);
  dfs(grid, i+1, j);
  dfs(grid, i, j+1);
  dfs(grid, i, j-1);
}

let grid = [["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]
console.log(numIslands(grid));
