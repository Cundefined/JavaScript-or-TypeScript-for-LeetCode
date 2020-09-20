function cuttingRope(n: number): number {
  // 创建dp数组
  const dp: number[] = new Array(n + 1);
  // 初始化
  dp[0] = 0;
  dp[1] = 0;

  for (let i: number = 2; i <= n; i++) {
    // 记录当前整数i能分割得到的最大乘积，不断更新此最大值
    let maxProduct: number = 0;
    // 当 i≥2 时，对正整数 i 拆分出的第一个正整数是 j（1≤j<i)
    for (let j: number = 1; j < i; j++) {
      maxProduct = Math.max(maxProduct, Math.max(j * (i - j), j * dp[i - j]));
    }

    dp[i] = maxProduct;
  }

  return dp[n];
}
