/*
解题思路：动态规划
1、状态：dp[i] 到达当前台阶有i种跳法
2、状态转移方程：dp[i] = dp[i - 1] + dp[i - 2]
*/
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  const dp = [];

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    // % 1000000007 防止超过整型数据的上界
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
};
