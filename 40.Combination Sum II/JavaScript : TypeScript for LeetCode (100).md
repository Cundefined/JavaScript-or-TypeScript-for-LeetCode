# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第40题 )  组合总和 II**](https://leetcode-cn.com/problems/combination-sum-ii/)
       



## 2、解题思路
```javascript
方法：递归回溯法
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const path = [];
  const res = [];

  // 对数组从小到大排序，方便查看前一个相同元素有没有被访问过
  candidates.sort();
  dfs(candidates, target, path, res, 0);

  return res;

  function dfs(candidates, target, path, res, start) {
    // 递归结束条件
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push([...path]);
      return;
    }

    // 递归总体程序
    for (let i = start; i < candidates.length; i++) {
      // 去重
      if (i !== start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      //回溯三部曲【归去来兮】
      path.push(candidates[i]);
      dfs(candidates, target - candidates[i], path, res, i + 1);
      path.pop();
    }
  }
};
```

### 2.2、TypeScript Solution

```javascript
function combinationSum2(candidates: number[], target: number): number[][] {
  const path: number[] = [];
  const res: number[][] = [];

  // 对数组从小到大排序，方便查看前一个相同元素有没有被访问过
  candidates.sort();
  dfs(candidates, target, path, res, 0);

  return res;

  function dfs(
    candidates: number[],
    target: number,
    path: number[],
    res: number[][],
    start: number
  ) {
    // 递归结束条件
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push([...path]);
      return;
    }

    // 递归总体程序
    for (let i: number = start; i < candidates.length; i++) {
      // 去重
      if (i !== start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      //回溯三部曲【归去来兮】
      path.push(candidates[i]);
      dfs(candidates, target - candidates[i], path, res, i + 1);
      path.pop();
    }
  }
}
```

