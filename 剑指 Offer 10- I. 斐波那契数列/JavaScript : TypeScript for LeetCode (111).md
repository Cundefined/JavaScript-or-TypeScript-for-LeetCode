# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 10- I )  斐波那契数列**](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)
       


## 2、解题思路
```javascript
方法一、记忆化
方法二、优化空间复杂度：
只使用两个变量去记忆化存储前两个数值
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  const memo = [];

  memo[0] = 0;
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
    memo[i] %= 1000000007;
  }

  return memo[n];
};
```

### 2.2、TypeScript Solution

```javascript
function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  let prev2: number = 0;
  let prev1: number = 1;

  let res: number = 0;

  for (let i: number = 2; i <= n; i++) {
    res = (prev1 + prev2) % 1000000007;
    prev2 = prev1;
    prev1 = res;
  }

  return res;
}
```

