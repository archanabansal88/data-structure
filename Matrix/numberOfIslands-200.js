/**
 * https://leetcode.com/problems/number-of-islands/
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count += dfs(i, j, grid);
      }
    }
  }

  function dfs(row, column, grid) {
    if (
      row < 0 ||
      row > grid.length - 1 ||
      column < 0 ||
      column > grid[0].length - 1 ||
      grid[row][column] === "0"
    ) {
      return;
    }
    grid[row][column] = "0";
    dfs(row + 1, column, grid);
    dfs(row - 1, column, grid);
    dfs(row, column + 1, grid);
    dfs(row, column - 1, grid);
    return 1;
  }
  return count;
};
