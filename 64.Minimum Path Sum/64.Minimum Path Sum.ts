function minPathSum(grid: number[][]): number {
  let rows: number = grid.length;
  let columns: number = grid[0].length;

  if (rows === 0 || columns === 0) {
    return 0;
  }

  // 优化空间复杂度：
  let dp: number[] = new Array<number>(columns);

  for (let row: number = rows - 1; row >= 0; row--) {
    //   从最后一行的最后一个元素开始（右下角）
    for (let col: number = columns - 1; col >= 0; col--) {
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
}

