# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode -- 第977题 )  有序数组的平方**](https://leetcode-cn.com/problems/squares-of-a-sorted-array/)
      


## 2、解题思路
**方法：双指针**
```javascript
1、创建结果数组
2、创建两个指针，分别指向原数组左右两端
3、创建结果数组的指针，用于从后往前加入结果数组，初始化为A.length - 1
4、循环遍历
5、返回结果
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  const res = [];
  let left = 0;
  let right = A.length - 1;

  let resPointer = A.length - 1;

  while (left <= right) {
    if (A[left] * A[left] < A[right] * A[right]) {
      res[resPointer] = A[right] * A[right];
      right--;
    } else {
      res[resPointer] = A[left] * A[left];
      left++;
    }

    resPointer--;
  }

  return res;
};
```

### 2.2、TypeScript Solution

```javascript
function sortedSquares(A: number[]): number[] {
  const res: number[] = [];
  let left: number = 0;
  let right: number = A.length - 1;

  let resPointer: number = A.length - 1;

  while (left <= right) {
    if (A[left] * A[left] < A[right] * A[right]) {
      res[resPointer] = A[right] * A[right];
      right--;
    } else {
      res[resPointer] = A[left] * A[left];
      left++;
    }

    resPointer--;
  }

  return res;
};
```

