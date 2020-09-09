# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第39题 )  组合总和**](https://leetcode-cn.com/problems/combination-sum/)
     



## 2、解题思路
```javascript
方法：回溯法
回溯三部曲
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (candidates.length === 0) {
    return [];
  }

  function dfs(start, candidates, path, res, target) {
    //   递归结束条件
    if (target === 0) {
      // 深拷贝
      res.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] <= target) {
        //   回溯三部曲
        // 1、选择
        path.push(candidates[i]);

        // 2、从当前选择继续看下一次选还是不选
        dfs(i, candidates, path, res, target - candidates[i]);

        // 3、撤销当前选择
        path.pop();
      }
    }
  }

  const path = [];
  const res = [];

  dfs(0, candidates, path, res, target);

  return res;
};
```

### 2.2、TypeScript Solution

```javascript
function combinationSum(candidates: number[], target: number): number[][] {
  if (candidates.length === 0) {
    return [];
  }

  function dfs(
    start: number,
    candidates: number[],
    path: number[],
    res: number[][],
    target: number
  ): void {
    //   递归结束条件
    if (target === 0) {
      // 深拷贝
      res.push([...path]);
      return;
    }

    for (let i: number = start; i < candidates.length; i++) {
      if (candidates[i] <= target) {
        //   回溯三部曲
        // 1、选择
        path.push(candidates[i]);

        // 2、从当前选择继续看下一次选还是不选
        dfs(i, candidates, path, res, target - candidates[i]);

        // 3、撤销当前选择
        path.pop();
      }
    }
  }

  const path: number[] = [];
  const res: number[][] = [];

  dfs(0, candidates, path, res, target);

  return res;
}
```

