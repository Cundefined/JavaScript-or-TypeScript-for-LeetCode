function canPartition(nums: number[]): boolean {
    if (nums.length === 0) {
        return false;
      }
    
      let sum: number = 0;
      for (const item of nums) {
        sum += item;
      }
    
      // 1、先计算所有元素总和，如果为奇数，那肯定不能等分成两个子集，返回false
      if ((sum & 1) !== 0) {
        return false;
      }
    
      // 2、否则，为偶数，则可以，target=sum / 2，接下来目标就是找到一组元素之和为target的元素即可
      const target: number = sum / 2;
    
      // 3、由此，转换为【0-1背包问题】（典型的动态规划问题）：
      const dp: boolean[][] = new Array<boolean[]>(nums.length);
      for (let i: number = 0; i < dp.length; i++) {
        dp[i] = new Array<boolean>(target + 1).fill(false);
      }
    
      //初始化dp第一行
      if (nums[0] <= target) {
        dp[0][nums[0]] = true;
      }
    
      //状态转移填充dp后面行
      for (let i: number = 1; i < nums.length; i++) {
        for (let j: number = 0; j <= target; j++) {
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