# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第77题 )  组合**](https://leetcode-cn.com/problems/combinations/)
       




## 2、解题思路
```javascript
解题思路：回溯法
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  if (n < k || k <= 0) {
    return res;
  }

  function dfs(path, start) {
    // 递归终止条件
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++, start++) {
      if (path.includes(i)) {
        continue;
      }
      // 选
      path.push(i);
      // 继续看下一层的选择
      dfs(path, start);
      // 不选，撤回当前选择，回溯
      // 递归之前做了什么，递归之后需要做相同操作的逆向操作
      path.pop();
    }
  }

  dfs([], 1);
  return res;
};
```

### 2.2、TypeScript Solution

```javascript
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];

  if (n < k || k <= 0) {
    return res;
  }

  function dfs(path: number[], start: number): void {
    // 递归终止条件
    if (path.length === k) {
      res.push([...path]);
      return; 
    }

    for (let i: number = start; i <= n; i++, start++) {
      if (path.includes(i)) {
        continue;
      }
      // 选
      path.push(i);
      // 继续看下一层的选择
      dfs(path, start);
      // 不选，撤回当前选择，回溯
      // 递归之前做了什么，递归之后需要做相同操作的逆向操作
      path.pop();
    }
  }

  dfs([], 1);
  return res;
}
```

