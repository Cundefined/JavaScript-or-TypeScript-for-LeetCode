# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第46题 )  全排列**](https://leetcode-cn.com/problems/permutations/)
       




## 2、解题思路
方法：回溯法
```javascript
回溯法（backtrack）-- 常用于遍历列表所有子集，是 DFS 深度搜索一种，一般用于全排列，
        穷尽所有可能，遍历的过程实际上是一个决策树的遍历过程。时间复杂度一般 O(N!)，
        它不像动态规划存在重叠子问题可以优化，回溯算法就是【纯暴力穷举】，复杂度【一般都很高】。

基本思想：从选择列表里做一个选择，然后一直递归往下搜索答案，如果遇到路径不通，就返回来撤销这次选择。
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  // 定义递归函数（深度优先）
  function dfs(path) {
    // 递归结束条件
    if (path.length === nums.length) {
      // 一旦找满了，就要记录当前的选择的路径结果
      //[...path]会产生全新的数组，【深拷贝】，如果是直接res.push(path)，
      //就只是把path数组的地址存进了结果，如果后面对path进行了修改，那res存的内容也会被修改！！
      res.push([...path]);
      //终止dfs
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      dfs(path);
      // 撤销选择，回溯法，就是往回退一步
      path.pop();
    }
  }

  // dfs搜索，一直往下搜索做出选择
  dfs([]);

  return res;
};
```

### 2.2、TypeScript Solution

```javascript
function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  function dfs(path: number[]): void {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i: number = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      dfs(path);
      // 撤销选择，回溯法，就是往回退一步
      path.pop();
    }
  }

  // dfs搜索，一直往下搜索做出选择，开始路径为空
  dfs([]);

  return res;
}
```

