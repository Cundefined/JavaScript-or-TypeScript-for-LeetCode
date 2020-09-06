function longestCommonSubsequence(text1: string, text2: string): number {
  const len1: number = text1.length;
  const len2: number = text2.length;

  //创建二维数组dp
  const dp: number[][] = Array.from(new Array(len1), () =>
    new Array(len2).fill(0)
  );

  //初始化dp
  //左上角
  dp[0][0] = text1[0] === text2[0] ? 1 : 0;

  //第一行（遍历第一行的所有列）,除了左上角
  for (let col: number = 1; col < len2; col++) {
    //当出现一个1时，后面不管字符相不相等，都只能取1，所以和前面一位取较大的那个
    dp[0][col] = Math.max(text1[0] === text2[col] ? 1 : 0, dp[0][col - 1]);
  }
  //第一列（遍历第一行的所有列）,除了左上角
  for (let row: number = 1; row < len1; row++) {
    dp[row][0] = Math.max(text1[row] === text2[0] ? 1 : 0, dp[row - 1][0]);
  }

  //一般情况，状态转移方程
  for (let row: number = 1; row < len1; row++) {
    for (let col: number = 1; col < len2; col++) {
      if (text1[row] === text2[col]) {
        dp[row][col] = dp[row - 1][col - 1] + 1;
      } else {
        dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
      }
    }
  }

  return dp[len1 - 1][len2 - 1];
}
