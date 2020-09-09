# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 03)  数组中重复的数字**](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)
      


## 2、解题思路
```javascript
遍历数组，检查当前元素是否出现过：
    1、如果之前没有出现过，说明是第一次出现，标记为1
    2、如果出现过，直接返回该元素
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      return nums[i];
    }
  }
};
```

### 2.2、TypeScript Solution

```javascript
function findRepeatNumber(nums: number[]): number | undefined {
  const map: Map<number, number> = new Map();

  for (let i: number = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      return nums[i];
    }
  }
}
```

