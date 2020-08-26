# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第35题 )  搜索插入位置**
   
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

**示例 1:**

```javascript
输入: [1,3,5,6], 5
输出: 2
```
**示例 2:**
```javascript
输入: [1,3,5,6], 2
输出: 1
```
**示例 3:**
```javascript
输入: [1,3,5,6], 7
输出: 4
```
**示例 4:**
```javascript
输入: [1,3,5,6], 0
输出: 0
```



## 2、解题思路
方法：二分查找
```javascript
1、标准的二分查找模板
注意：在循环结束还没返回的话，说明没找到，此时应该返回left，因为left = mid + 1，
    即可按照递增排在mid后面
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
```

### 2.2、TypeScript Solution

```typescript
function searchInsert(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left <= right) {
    let mid: number = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

```

