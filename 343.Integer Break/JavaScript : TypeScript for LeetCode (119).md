﻿# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第343题 )  整数拆分**](https://leetcode-cn.com/problems/integer-break/)
       

## 2、解题思路
**方法：最优化问题 -- 动态规划**
```javascript
1、状态：dp[i] 表示将正整数 ii 拆分成至少两个正整数的和之后，这些正整数的最大乘积。
2、状态转移方程：当 j 固定时，有 dp[i]=max(j * (i-j), j * dp[i-j])
   由于 j 的取值范围是 1 到 i-1，需要遍历所有的 j ，即可得到dp[i]的最大值，
最终得到 dp[n] 的值，即为将正整数 n 拆分成【至少两个正整数】的和之后，这些正整数的最大乘积。
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  // 创建dp数组
  const dp = new Array(n + 1);
  // 初始化
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    // 记录当前整数i能分割得到的最大乘积，不断更新此最大值
    let maxProduct = 0;
    // 当 i≥2 时，对正整数 i 拆分出的第一个正整数是 j（1≤j<i)
    for (let j = 1; j < i; j++) {
      maxProduct = Math.max(maxProduct, Math.max(j * (i - j), j * dp[i - j]));
    }

    dp[i] = maxProduct;
  }

  return dp[n];
};
```

### 2.2、TypeScript Solution

```javascript
function integerBreak(n: number): number {
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
```

