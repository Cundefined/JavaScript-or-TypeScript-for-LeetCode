function minimumTotal(triangle: number[][]): number {
  let rows: number = triangle.length;

  //   一、状态定义
  let dp: number[] = new Array<number>(rows + 1);

  //   二、初始化
  dp.fill(0);

  //   三、递推求解
  for (let row: number = rows - 1; row >= 0; row--) {
    for (let col: number = 0; col <= row; col++) {
      dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
    }
  }
  //   四、返回答案
  return dp[0];
}
