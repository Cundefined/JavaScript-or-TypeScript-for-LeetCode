# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 05 )  替换空格**](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)
      




## 2、解题思路
```javascript
借助新字符串操作
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  if (s.length === 0) {
    return s;
  }

  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      newStr += "%20";
    } else {
      newStr += s[i];
    }
  }

  return newStr;
};
```

### 2.2、TypeScript Solution

```javascript
function replaceSpace(s: string): string {
  if (s.length === 0) {
    return s;
  }

  let newStr: string = "";

  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === " ") {
      newStr += "%20";
    } else {
      newStr += s[i];
    }
  }

  return newStr;
}
```

