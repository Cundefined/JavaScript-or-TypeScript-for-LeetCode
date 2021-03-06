/*
解题思路：动态规划
1、先计算所有元素总和，如果为奇数，那肯定不能等分成两个子集，返回false
2、否则，为偶数，则可以，target=sum / 2，接下来目标就是找到一组元素之和为target的元素即可
3、由此，转换为【0-1背包问题】（典型的动态规划问题）：
    3.1、状态：dp[i][j]表示从数组的 [0, i] 这个子区间内挑选一些正整数，每个数只能用一次，使得这些数的和恰好等于 j。
    3.2、状态转移方程：dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]]
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums.length === 0) {
    return false;
  }

  let sum = 0;
  for (const item of nums) {
    sum += item;
  }

  // 1、先计算所有元素总和，如果为奇数，那肯定不能等分成两个子集，返回false
  if ((sum & 1) !== 0) {
    return false;
  }

  // 2、否则，为偶数，则可以，target=sum / 2，接下来目标就是找到一组元素之和为target的元素即可
  const target = sum / 2;

  // 3、由此，转换为【0-1背包问题】（典型的动态规划问题）：
  const dp = new Array(nums.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(target + 1).fill(false);
  }

  //初始化dp第一行
  if (nums[0] <= target) {
    dp[0][nums[0]] = true;
  }

  //状态转移填充dp后面行
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= target; j++) {
      if (nums[i] === j) {
        dp[i][j] = true;
        continue;
      }

      if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      }
    }
  }

  return dp[nums.length - 1][target];
};
