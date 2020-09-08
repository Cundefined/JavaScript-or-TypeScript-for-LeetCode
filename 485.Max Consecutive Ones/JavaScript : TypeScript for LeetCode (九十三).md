# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第485题 )  最大连续1的个数**](https://leetcode-cn.com/problems/max-consecutive-ones/)
      



## 2、解题思路
```javascript
解题思路：遍历数组
注意保存最大长度即可
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let countOne = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      countOne++;
    } else {
      countOne = 0;
    }
    maxLength = Math.max(maxLength, countOne);
  }

  return maxLength;
};
```

### 2.2、TypeScript Solution

```javascript
function findMaxConsecutiveOnes(nums: number[]): number {
  let countOne: number = 0;
  let maxLength: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      countOne++;
    } else {
      countOne = 0;
    }
    maxLength = Math.max(maxLength, countOne);
  }

  return maxLength;
}
```

