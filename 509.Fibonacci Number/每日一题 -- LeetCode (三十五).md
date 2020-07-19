# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第509题 )  斐波那契数**
       
斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

```javascript
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```
给定 N，计算 F(N)。
​	  **示例 1:**

```javascript
输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
```
**示例 2:**
```javascript
输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
```
**示例 3:**
```javascript
输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
```
**提示：**

 - 0 ≤ N ≤ 30

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fibonacci-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：动态规划（自下而上,从基础条件往目标推，先把将来要用的信息计算好）
注意：大部分动态规划问题解法 -> 递归(recursion) + 记忆化(memoization)
递归的问题：大量重复的计算会导致时间复杂度指数级增加
引入记忆化：在递归的基础上，去记住、缓存住一些之前计算过的值，避免递归重复计算
 1. 边界条件预判，如果N为0或者1，说明是前两个数，直接返回N就行
 

 2. 创建记忆化数组，缓存前面计算的结果，需要用的时候直接来取，不用重复计算了

 3. 已知前两个数，直接放进来

 4. for循环遍历，,从基础条件往目标推，把第3个数到第N个数全部算出来
 5. 返回第N个数

### 2.1、JavaScript Solution

```javascript
/*
解题思路：动态规划（自下而上,从基础条件往目标推，先把将来要用的信息计算好）
注意：大部分动态规划问题解法 -> 递归(recursion) + 记忆化(memoization)
递归的问题：大量重复的计算会导致时间复杂度指数级增加
引入记忆化：在递归的基础上，去记住、缓存住一些之前计算过的值，避免递归重复计算

1、边界条件预判，如果N为0或者1，说明是前两个数，直接返回N就行
2、创建记忆化数组，缓存前面计算的结果，需要用的时候直接来取，不用重复计算了
3、已知前两个数，直接放进来
4、for循环遍历，,从基础条件往目标推，把第3个数到第N个数全部算出来，
5、返回第N个数

注意：自下而上的动态规划，一般可以优化空间复杂度，其实你会发现，自下而上计算每个结果时，
     当前计算只与前2个数有关系，再往前的数就没有用了，没必要用数组还存着它，只需要用两个变量
     保存当前计算的前两个数就行，跟着一起往前走更新就行，从而优化空间复杂度

1、边界条件预判，如果N为0或者1，说明是前两个数，直接返回N就行
2、创建两个变量，记录当前计算的前两个数就行，初始化为最开始的2个数
3、创建结果变量
4、for循环遍历，,从基础条件往目标推，把第3个数到第N个数全部算出来，
5、返回结果
*/
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  // 1、边界条件预判，如果N为0或者1，说明是前两个数，直接返回N就行
  if (N <= 1) {
    return N;
  }

  // 2、创建两个变量，记录当前计算的前两个数就行，初始化为最开始的2个数
  let prev2 = 0;
  let prev1 = 1;
  // 3、创建结果变量
  let result = 0;


  // 4、for循环遍历，,从基础条件往目标推，把第3个数到第N个数全部算出来
  for (let i = 2; i <= N; i++) {
    // 计算当前计算结果
    result = prev2 + prev1;
    // 更新变量，两个变量都往前走一步
    prev2 = prev1;
    prev1 = result;
  }

  // 5、返回第N个数
  return result;
};
```


### 2.2、TypeScript Solution

```javascript
function fib(N: number): number {
    if (N <= 1) {
        return N;
    }

    const memo: number[] = [];

    memo[0] = 0;
    memo[1] = 1;

    function helper(n: number): number {
        if (memo[n] !== undefined) {
            return memo[n];
        }

        memo[n] = helper(n - 1) + helper(n - 2);

        return memo[n];
    }

    const result = helper(N);

    return result;
}

```

