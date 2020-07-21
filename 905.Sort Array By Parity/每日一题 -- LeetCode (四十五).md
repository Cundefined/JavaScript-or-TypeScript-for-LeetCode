# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第905题 )  按奇偶排序数组**
       
给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

你可以返回满足此条件的任何数组作为答案。


​	  **示例 :**

```javascript
输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
```
**提示：**

 1. 1 <= A.length <= 5000
 2.  0 <= A[i] <= 5000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-array-by-parity
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 创建两个指针，初始化分别指向数组的开头和结尾
 

 2. i<j时，while循环，讨论4种情况：
 	2.1、A[i]为奇，A[j]为奇 -> A[j]位置正确，不处理，指针移动 j--
    2.2、A[i]为奇，A[j]为偶 -> A[i]、A[j]交换位置，i++,j--
    2.3、A[i]为偶，A[j]为奇 -> 位置都正确，不处理，指针移动 i++,j-- 
    2.4、A[i]为偶，A[j]为偶 -> A[i]位置正确，不处理，指针移动 i++ 
 3. 循环结束，返回原数组
 	
### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、创建两个指针，初始化分别指向数组的开头和结尾
2、i<j时，while循环，讨论4种情况：
    2.1、A[i]为奇，A[j]为奇 -> A[j]位置正确，不处理，指针移动 j--
    2.2、A[i]为奇，A[j]为偶 -> A[i]、A[j]交换位置，i++,j--
    2.3、A[i]为偶，A[j]为奇 -> 位置都正确，不处理，指针移动 i++,j-- 
    2.4、A[i]为偶，A[j]为偶 -> A[i]位置正确，不处理，指针移动 i++ 
3、循环结束，返回原数组
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  // 1、创建两个指针，初始化分别指向数组的开头和结尾
  let i = 0;
  let j = A.length - 1;

  // 2、i<j时，while循环，讨论4种情况：
  while (i < j) {
    // 2.1、A[i]为奇，A[j]为奇 -> A[j]位置正确，不处理，指针移动 j--
    if (A[i] % 2 === 1 && A[j] % 2 === 1) {
      j--;
    } else if (A[i] % 2 === 1 && A[j] % 2 === 0) {
      // 2.2、A[i]为奇，A[j]为偶 -> A[i]、A[j]交换位置，i++,j--
      [A[j], A[i]] = [A[i], A[j]];
      i++;
      j--;
    } else if (A[i] % 2 === 0 && A[j] % 2 === 1) {
      // 2.3、A[i]为偶，A[j]为奇 -> 位置都正确，不处理，指针移动 i++,j--
      i++;
      j--;
    } else {
      // 2.4、A[i]为偶，A[j]为偶 -> A[i]位置正确，不处理，指针移动 i++
      i++;
    }
  }

  // 3、循环结束，返回原数组
  return A;
};
```


### 2.2、TypeScript Solution

```javascript
function sortArrayByParity(A: number[]): number[] {
  let i: number = 0;
  let j: number = A.length - 1;

  while (i < j) {
    if (A[i] % 2 === 1 && A[j] % 2 === 1) {
      j--;
    } else if (A[i] % 2 === 1 && A[j] % 2 === 0) {
      [A[j], A[i]] = [A[i], A[j]];
      i++;
      j--;
    } else if (A[i] % 2 === 0 && A[j] % 2 === 1) {
      i++;
      j--;
    } else {
      i++;
    }
  }

  return A;
}

```

