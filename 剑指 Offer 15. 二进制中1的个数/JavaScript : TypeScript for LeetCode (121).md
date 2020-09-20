# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 15 )  二进制中1的个数**](https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)
      




## 2、解题思路
**方法：位运算**
```javascript
任何数与1按位与的话，就可以判断其最右边的那位是否为1！！
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n > 0) {
    if (n & 1) {
      count++;
    }
    n = n >>> 1;
  }

  return count;
};
```
