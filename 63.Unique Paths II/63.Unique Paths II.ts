/*
优化空间复杂度：
    DP：用一维数组代替二维数组
*/
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let rows: number = obstacleGrid.length;
  let columns: number = obstacleGrid[0].length;

  if (rows === 0 || columns === 0) {
    return 0;
  }

  //   优化空间复杂度
  let dp: number[] = new Array<number>(columns);

  for (let row: number = 0; row < rows; row++) {
    for (let col: number = 0; col < columns; col++) {
      if (obstacleGrid[row][col] === 1) {
        dp[col] = 0;
      } else if (row === 0 && col > 0) {
        dp[col] = dp[col - 1];
      } else if (row > 0 && col === 0) {
        dp[col] = dp[col];
      } else if (row > 0 && col > 0) {
        dp[col] = dp[col - 1] + dp[col];
      } else {
        dp[col] = 1;
      }
    }
  }

  return dp[columns - 1];
}
