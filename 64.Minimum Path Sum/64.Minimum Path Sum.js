/*
解题思路：动态规划
DP核心问题：状态 状态转移方程
1、state: f[x][y]从当前位置x,y走到终点的最短路径和 
2、function: f[x][y] = min(f[x+1][y], f[x][y+1]) + A[x][y] 
3、intialize: 初始化考虑特殊情况（不能用递推公式包括的情况）最后一行、最右一列、最后一个元素
4、answer: f[0][0]
时间复杂度 -- O(mn) 遍历一次整个矩阵
空间复杂度 -- O(mn) 创建了一个同样大小的mxn的DP矩阵
优化空间复杂度：
    DP：用一维数组代替二维数组
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let rows = grid.length;
  let columns = grid[0].length;

  // 边界条件预判
  if (rows === 0 || columns === 0) {
    return 0;
  }

  // 1、state: f[x][y]从当前位置x,y走到终点的最短路径和
  //   let dp = new Array(rows);
  //   for (let i = 0; i < dp.length; i++) {
  //     dp[i] = new Array(columns);
  //   }
  // 优化空间复杂度：
  let dp = new Array(columns);

  // 2、function: f[x][y] = min(f[x+1][y], f[x][y+1]) + A[x][y]
  // 3、intialize: 初始化考虑特殊情况（不能用递推公式包括的情况）最后一行、最右一列、最后一个元素
  //从最后一行开始，自下往上
  for (let row = rows - 1; row >= 0; row--) {
    //   从最后一行的最后一个元素开始（右下角）
    for (let col = columns - 1; col >= 0; col--) {
      // 由于最后一行只能往右走，最右一列只能往下走，不满足递推公式，需要单独讨论
      // 最后一行(除了右下角那个元素)只能往右走
      if (row === rows - 1 && col !== columns - 1) {
        dp[col] = dp[col + 1] + grid[row][col];
      } else if (row !== rows - 1 && col === columns - 1) {
        // 最后一列(除了右下角那个元素)只能往下走
        dp[col] = dp[col] + grid[row][col];
      } else if (row !== rows - 1 && col !== columns - 1) {
        // 一般情况，满足递推公式
        dp[col] = Math.min(dp[col], dp[col + 1]) + grid[row][col];
      } else {
        // 右下角元素
        dp[col] = grid[row][col];
      }
    }
  }

  // 4、answer: f[0]
  return dp[0];
};
