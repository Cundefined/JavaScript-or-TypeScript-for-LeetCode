# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第322题 )  零钱兑换**](https://leetcode-cn.com/problems/coin-change/)
      


## 2、解题思路
**方法：动态规划**
```javascript
类似70. 爬楼梯
状态：dp[i] -- 达到第i级台阶所需的最少跳跃次数
状态转移方程：dp[i] = min(dp[当前台阶i - 可选择的单次跳跃台阶数]) + 1
            例如，单次可跳跃1、2、5级台阶，要到达第11级，可以从第10级跳1次、第9级跳2次，第6级跳5次到达，
            比较选择到达这三个台阶中所需最少跳跃次数的那个，再跳一次就可以到第11级
```


### 2.1、JavaScript Solution

```javascript
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
```

### 2.2、TypeScript Solution

```javascript
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
```

