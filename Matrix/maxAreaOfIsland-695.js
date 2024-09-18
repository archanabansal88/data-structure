/**
 * https://leetcode.com/problems/max-area-of-island/
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function (grid) {
  if (grid.length === 0) return 0;
  let visited = [...Array(grid.length)].map((e) => Array(grid[0].length));
  let maxArea = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }

  function dfs(row, column) {
    if (
      row < 0 ||
      row > grid.length - 1 ||
      column < 0 ||
      column > grid[0].length - 1 ||
      grid[row][column] === 0 ||
      visited[row][column]
    ) {
      return 0;
    }
    visited[row][column] = true;
    return (
      1 +
      (dfs(row + 1, column) +
        dfs(row - 1, column) +
        dfs(row, column + 1) +
        dfs(row, column - 1))
    );
  }

  return maxArea;
};
