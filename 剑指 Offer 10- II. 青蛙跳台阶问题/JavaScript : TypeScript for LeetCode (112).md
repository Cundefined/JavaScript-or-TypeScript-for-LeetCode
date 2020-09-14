# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 10- II )  青蛙跳台阶问题**](https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/)
     


## 2、解题思路
```javascript
方法：动态规划
1、状态：dp[i] 到达当前台阶有i种跳法
2、状态转移方程：dp[i] = dp[i - 1] + dp[i - 2]
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  const dp = new Array(n);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    // % 1000000007 防止超过整型数据的上界
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
};
```

### 2.2、TypeScript Solution

```javascript
/*
优化空间复杂度
*/
function numWays(n: number): number {
  if (n <= 1) {
    return 1;
  }

  let prev2: number = 1;
  let prev1: number = 1;

  let currWays: number = 0;

  for (let i: number = 2; i <= n; i++) {
    currWays = (prev1 + prev2) % 1000000007;
    prev2 = prev1;
    prev1 = currWays;
  }

  return currWays;
}
```

