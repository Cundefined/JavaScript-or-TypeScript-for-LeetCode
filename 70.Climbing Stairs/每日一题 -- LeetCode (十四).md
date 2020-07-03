# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第70题 )  爬楼梯**
      假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
      **注意**：给定 n 是一个正整数。

​	  **示例 1:**

```javascript
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```
**示例 2:**
```javascript
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/climbing-stairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：动态规划
 1. 创建空的记忆数组，记录每个台阶的走法数
 

 2. 手动初始化走到第一个、第二个台阶的走法数
 3. 从第三个台阶开始遍历到最后的台阶：
 	3.1、当前台阶的走法数=前一个台阶走法数+前两个台阶的走法数
 6. 返回最后一个台阶（楼顶）的走法数

### 2.1、JavaScript Solution

```javascript
/*
解题思路：动态规划
1、创建空的记忆数组，记录每个台阶的走法数
2、手动初始化走到第一个、第二个台阶的走法数
3、从第三个台阶开始遍历到最后的台阶：
    3.1、当前台阶的走法数=前一个台阶走法数+前两个台阶的走法数
4、返回最后一个台阶（楼顶）的走法数
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 1、创建空的记忆数组，记录每个台阶的走法数
  const memo = [];

  // 2、手动初始化走到第一个、第二个台阶的走法数
  memo[0] = 1;
  memo[1] = 2;

  // 3、从第三个台阶开始遍历到最后的台阶：
  for (let i = 2; i < n; i++) {
    // 3.1、当前台阶的走法数=前一个台阶走法数+前两个台阶的走法数
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  // 4、返回最后一个台阶（楼顶）的走法数
  return memo[n - 1];
};
```


### 2.2、TypeScript Solution

```javascript
function climbStairs(n: number): number {
    const memo: number[] = [];

    memo[0] = 1;
    memo[1] = 2;

    for (let i: number = 2; i < n; i++) {
        memo[i] = memo[i - 1] + memo[i -2];
    }

    return memo[n -1];
};
```

