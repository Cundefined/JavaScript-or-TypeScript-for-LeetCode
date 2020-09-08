/*
解题思路：动态规划
类似70. 爬楼梯
状态：dp[i] -- 达到第i级台阶所需的最少跳跃次数
状态转移方程：dp[i] = min(dp[当前台阶i - 可选择的单次跳跃台阶数]) + 1
            例如，单次可跳跃1、2、5级台阶，要到达第11级，可以从第10级跳1次、第9级跳2次，第6级跳5次到达，
            比较选择到达这三个台阶中所需最少跳跃次数的那个，再跳一次就可以到第11级
*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
