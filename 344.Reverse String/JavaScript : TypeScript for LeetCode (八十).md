# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第344题 )  反转字符串**](https://leetcode-cn.com/problems/reverse-string/)
       



## 2、解题思路
**方法一：双指针**
```javascript
时间复杂度：O(N)  执行了 N/2 次的交换。
空间复杂度：O(1)  只使用了常数级空间。
```
**方法二：递归**
```javascript
递归：将大问题转化为小问题，通过递归依次解决各个小问题

我们实现递归函数 reverser，它接受两个参数：left 左指针和 right 右指针。
如果 left>=right，不做任何操作。
否则交换 s[left] 和 s[right] 和调用 reverser(left + 1, right - 1)。
首次调用函数我们传递首尾指针反转整个字符串 return reverser(0, len(s) - 1)。

时间复杂度：O(N)  执行了 N/2 次的交换。
空间复杂度：O(N)  递归过程中使用的堆栈空间。
```

### 2.1、JavaScript Solution

**方法一：双指针**
```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  if (s.length === 0) {
    return [];
  }
  if (s.length === 1) {
    return;
  }

  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};

```

### 2.2、TypeScript Solution
**方法二：递归**
```javascript
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  function reverser(left: number, right: number): void {
    // 递归结束条件
    if (left >= right) {
      return;
    }

    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
    // 递归
    reverser(left, right);
  }

  reverser(0, s.length - 1);
}

```

