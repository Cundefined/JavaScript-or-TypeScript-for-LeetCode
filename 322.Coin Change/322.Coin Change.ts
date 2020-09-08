function coinChange(coins: number[], amount: number): number {
  // amount -- 需要到达的最终台阶
  const dp: number[] = new Array(amount + 1).fill(Infinity);

  // 第零级（平地，从平地出发）
  dp[0] = 0;

  for (let i: number = 1; i <= amount; i++) {
    // 初始化当前台阶
    dp[i] = Infinity;

    // 考虑可选择的跳跃的次数对dp[i]的影响，以此来更新成最少的跳跃次数
    for (let j: number = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
