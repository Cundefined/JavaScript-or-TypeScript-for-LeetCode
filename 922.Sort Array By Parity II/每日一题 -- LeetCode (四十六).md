# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第922题 )  按奇偶排序数组 II**
     
给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

你可以返回任何满足上述条件的数组作为答案。




​	  **示例 :**

```javascript
输入：[4,2,5,7]
输出：[4,5,2,7]
解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
```
**提示：**

 - 2 <= A.length <= 20000 
 - A.length % 2 == 0
 -  0 <= A[i] <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-array-by-parity-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：双指针
 1. 创建两个奇偶指针odd和even，分别指向奇数位置和偶数位置，每次跳2格
 

 2. 随便利用一个指针for循环遍历数组，比如用odd指针:
 	2.1、如果当前元素为偶数的话，需要去找附近的奇数互换（因为odd位置为奇数才是正确的，为奇数时，就不用处理了，直接接着往后遍历就行）
    2.2、当even位置为偶数且不越界的话，说明他不需要互换，直接跳到下一个位置
    2.3、while循环直到碰到奇数，退出循环，进行互换操作
 3. 返回数组
 	
### 2.1、JavaScript Solution

```javascript
/*
解题思路：双指针
1、创建两个奇偶指针odd和even，分别指向奇数位置和偶数位置，每次跳2格
2、随便利用一个指针for循环遍历数组，比如用odd指针:
    2.1、如果当前元素为偶数的话，需要去找附近的奇数互换（因为odd位置为奇数才是正确的，为奇数时，就不用处理了，直接接着往后遍历就行）
    2.2、当even位置为偶数且不越界的话，说明他不需要互换，直接跳到下一个位置
    2.3、while循环直到碰到奇数，退出循环，进行互换操作
3、返回数组
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  // 1、创建两个奇偶指针odd和even，分别指向奇数位置和偶数位置，每次跳2格
  //   奇数指针
  let odd = 1;
  //   偶数指针
  let even = 0;

  //   2、随便利用一个指针for循环遍历数组，比如用odd指针:
  for (odd; odd < A.length; odd += 2) {
    // 2.1、如果当前元素为偶数的话，需要去找附近的奇数互换（因为odd位置为奇数才是正确的，为奇数时，就不用处理了，直接接着往后遍历就行）
    if (A[odd] % 2 === 0) {
      // 2.2、当even位置为偶数且不越界的话，说明他不需要互换，直接跳到下一个位置
      while (A[even] % 2 === 0 && even < A.length) {
        even += 2;
      }
      //   2.3、while循环直到碰到奇数，退出循环，进行互换操作
      [A[odd], A[even]] = [A[even], A[odd]];
    }
  }
  // 3、返回数组
  return A;
};
```


### 2.2、TypeScript Solution

```javascript
function sortArrayByParityII(A: number[]): number[] {
  let even: number = 0;
  let odd: number = 1;

  for (even; even < A.length; even += 2) {
    if (A[even] % 2 === 1) {
      while (A[odd] % 2 === 1 && odd < A.length) {
        odd += 2;
      }

      [A[even], A[odd]] = [A[odd], A[even]];
    }
  }

  return A;
}

```

