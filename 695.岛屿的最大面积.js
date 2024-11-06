/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const m= grid.length //行
  const n=grid[0].length // 列

  let cnt = 0
  let max = 0
  const next =[
    [1,0],
    [-1,0],
    [0,1],
    [0,-1]
  ]
  for (let i = 0;i < m;i++) {
    for (let j = 0;j < n;j++) {
      if (grid[i][j] === 1) {
        cnt = 0
        const rlt = dfs(i, j)
        max = Math.max(max, rlt)
      }
    }
  }
  function dfs(i, j) {
    grid[i][j] = 0
    cnt += 1
    for (let k = 0;k < 4;k++) {
      const x = i + next[k][0]
      const y = j + next[k][1]
      if (x >= 0 && x < m && y>=0 && y < n && grid[x][y] === 1) {
        dfs(x, y)
      }
    }
    return cnt
  }
  return max
};
// @lc code=end

