# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 38 )  字符串的排列**](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)
      


## 2、解题思路
**方法：回溯法**
```javascript
回溯法
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res = new Set();
  const isVisited = [];

  dfs("", s, isVisited, res);
  return [...res];
};

function dfs(path, s, isVisited, res) {
  // 递归结束条件
  if (path.length === s.length) {
    //path装满就加入结果数组
    return res.add(path);
  }

  //递归主体，依次选择s中的每个字符
  for (let i = 0; i < s.length; i++) {
    //去重
    if (isVisited[i] === true) {
      continue;
    }

    isVisited[i] = true;
    path = path + s[i];
    dfs(path, s, isVisited, res);
    isVisited[i] = false;
    //回溯
    path = path.substring(0, path.length - 1);
  }
}

```

### 2.2、TypeScript Solution

```javascript
function permutation(s: string): string[] {
  const res: Set<string> = new Set<string>();
  const isVisited: boolean[] = [];

  dfs("", s, isVisited, res);
  return [...res];

}

function dfs(path: string, s: string, isVisited: boolean[], res: Set<string>): void {
  // 递归结束条件
  if (path.length === s.length) {
    //path装满就加入结果数组
    res.add(path);
    return;
  }

  //递归主体，依次选择s中的每个字符
  for (let i: number = 0; i < s.length; i++) {
    //去重
    if (isVisited[i] === true) {
      continue;
    }

    isVisited[i] = true;
    path = path + s[i];
    dfs(path, s, isVisited, res);
    isVisited[i] = false;
    //回溯
    path = path.substring(0, path.length - 1);
  }
}

```

