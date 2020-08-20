# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第260题 ) 只出现一次的数字 III**
       给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。

**示例 :**

```java
输入: [1,2,1,3,2,5]
输出: [3,5]
```
**注意：**

1.结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
2.你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。




## 2、解题思路
**使用“二进制” 【参考 136.Single Number】**
```javascript
注意：异或运算满足交换律和结合律，相同的元素异或得0，0与任何元素异或得其本身
     异或就是二进制的加法，而二进制加法和减法一样a + b = a - b = xorAllItem
     则xorAllItem表示两个出现一次的数的差异，假如找到了a，那 b = xorAllItem + a
1、计算数组中所有数字的二进制异或，这个值代表两个单数a，b之间的差值（a - b = xorAllItem），即标出所有不同的位
2、从所有不同的位中，只取一个位标志就行（取最右边的1）
3、主要思想是将两个不同的单数分成两部分，这样就形成了两个和136.Single Number一样的问题，再分别全部异或就可以分别得出两个单数
4、返回结果数组
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // 1、计算数组中所有数字的二进制异或，这个值代表两个单数a，b之间的差值（a - b = xorAllItem），即标出所有不同的位
  let xorAllItem = 0;
  for (let i = 0; i < nums.length; i++) {
    xorAllItem = xorAllItem ^ nums[i];
  }

  // 2、从所有不同的位中，只取一个位标志就行（取最右边的1）
  let bitFromAB = 1;
  while ((bitFromAB & xorAllItem) === 0) {
    bitFromAB = bitFromAB << 1;
  }

  // 3、主要思想是将两个不同的单数分成两部分，这样就形成了两个和136.Single Number一样的问题，再分别全部异或就可以分别得出两个单数
  let a = 0;
  let b = 0;
  for (const item of nums) {
    if ((item & bitFromAB) === 0) {
      b ^= item;
    } else {
      a ^= item;
    }
  }

  // 4、返回结果数组
  return [a, b];
};
```

### 2.2、TypeScript Solution

```javascript
function singleNumber(nums: number[]): number[] {
    let xorAllItem: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
      xorAllItem = xorAllItem ^ nums[i];
    }
  
    let bitFromAB: number = 1;
    while ((bitFromAB & xorAllItem) === 0) {
      bitFromAB = bitFromAB << 1;
    }
  
    let a: number = 0;
    let b: number = 0;
    for (const item of nums) {
      if ((item & bitFromAB) === 0) {
        b ^= item;
      } else {
        a ^= item;
      }
    }
  
    return [a, b];
};
```

