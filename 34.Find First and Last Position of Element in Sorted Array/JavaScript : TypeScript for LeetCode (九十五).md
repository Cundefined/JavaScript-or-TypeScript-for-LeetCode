# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第34题 )  在排序数组中查找元素的第一个和最后一个位置**](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
       




## 2、解题思路
**方法：二分搜索**
```javascript
注意：由于需要找最开始和最后出现的位置，所以需要在找到一个target之后，
    判断要将当前的mid往左移动到左端，还是往右移动到右端！！！
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  const res = [-1, -1];

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      let tempMid = mid;
      // 一直往左移，找到左端（最开始出现的位置），什么时候停呢，当发现nums[tempMid]不等于target时，
      // 说明刚刚移出到最左端，那么最左端就是当前位置加一
      while (tempMid >= left && nums[tempMid] === target) {
        tempMid--;
      }
      //记录最左端位置
      res[0] = tempMid + 1;

      //把tempMid移回原来的位置
      tempMid = mid;

      while (tempMid <= right && nums[tempMid] === target) {
        tempMid++;
      }
      //记录最右端位置
      res[1] = tempMid - 1;

      //都找到后，退出循环
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
};
```

### 2.2、TypeScript Solution

```javascript
function searchRange(nums: number[], target: number): number[] {
  let left: number = 0;
  let right: number = nums.length - 1;

  const res: number[] = [-1, -1];

  while (left <= right) {
    let mid: number = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      let tempMid: number = mid;
      // 一直往左移，找到左端（最开始出现的位置），什么时候停呢，当发现nums[tempMid]不等于target时，
      // 说明刚刚移出到最左端，那么最左端就是当前位置加一
      while (tempMid >= left && nums[tempMid] === target) {
        tempMid--;
      }
      //记录最左端位置
      res[0] = tempMid + 1;

      //把tempMid移回原来的位置
      tempMid = mid;

      while (tempMid <= right && nums[tempMid] === target) {
        tempMid++;
      }
      //记录最右端位置
      res[1] = tempMid - 1;

      //都找到后，退出循环
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
}
```

