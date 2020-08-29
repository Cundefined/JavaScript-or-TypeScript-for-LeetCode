/*
解题思路：动态规划
DP核心问题：状态 状态转移方程
1、state: f[x][y]从起点位置(0,0)走到当前位置(x,y)的路径总数
2、function: 三种特殊情况 + 一般情况
    1）、障碍位置，f[x][y] = 0
    2）、第一行时，f[x][y] = f[x][y-1]
    3）、第一列时，f[x][y] = f[x-1][y] 
    4）、非第一行且非第一列时（一般情况），f[x][y] = f[x][y-1] + f[x-1][y]
3、intialize: 起点状态dp[0][0] = 1
4、answer: f[0][0]
时间复杂度 -- O(mn) 遍历一次整个矩阵
空间复杂度 -- O(mn) 创建了一个同样大小的mxn的DP矩阵
*/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let rows = obstacleGrid.length;
  let columns = obstacleGrid[0].length;
  // 边界条件预判
  if (rows === 0 || columns === 0) {
    return 0;
  }

  // 1、state: f[x][y]从起点位置(0,0)走到当前位置(x,y)的路径总数
  let dp = new Array(rows);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(columns);
  }

  // 3、intialize: 起点状态dp[0][0] = 1
  //   dp[0][0] = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (obstacleGrid[row][col] === 1) {
        // 1）、障碍位置，f[x][y] = 0
        dp[row][col] = 0;
      } else if (row === 0 && col > 0) {
        // 2）、第一行时，f[x][y] = f[x][y-1]
        dp[row][col] = dp[row][col - 1];
      } else if (row > 0 && col === 0) {
        // 3）、第一列时，f[x][y] = f[x-1][y]
        dp[row][col] = dp[row - 1][col];
      } else if (row > 0 && col > 0) {
        // 4）、非第一行且非第一列时（一般情况），f[x][y] = f[x][y-1] + f[x-1][y]
        dp[row][col] = dp[row][col - 1] + dp[row - 1][col];
      } else {
        dp[row][col] = 1;
      }
    }
  }

  return dp[rows - 1][columns - 1];
};
