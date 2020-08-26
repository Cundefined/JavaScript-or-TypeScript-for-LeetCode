# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第33题 )  搜索旋转排序数组**
       
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。


**示例 1：**
```typescript
输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
```
**示例 2：**
```typescript
输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
```javascript
解题思路：二分搜索（部分有序问题）
1、创建寻找曲线跳跃点索引的函数，返回其索引：
    1.1、如果数组只有一个元素，返回该元素索引
    1.2、二分搜索直到发现跳跃点（nums[mid] > nums[mid + 1]则mid为跳跃点）
        注意：跳跃点的左右两边都是有序的数！！这样后面可以分别使用二分搜索了
    1.3、如果循环结束还没找到跳跃点，说明数组没有排序，最大值在最后位置
2、创建标准的有序数组的二分搜索函数，返回目标值索引
3、边界条件预判，数组为空，返回-1
4、获取跳跃点索引，依次来划分出左右两个有序的数组
5、判断目标值落在哪个有序数组中，并对其进行二分搜索，找到就返回目标索引
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 1、创建寻找曲线跳跃点索引的函数，返回其索引：
  function findJumpPointIndex(nums) {
    // 1.1、如果数组只有一个元素，返回该元素索引
    if (nums.length === 1) {
      return 0;
    }
    // 1.2、二分搜索直到发现跳跃点（nums[mid] > nums[mid + 1]则mid为跳跃点）
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (nums[mid] > nums[mid + 1]) {
        return mid;
      }

      if (nums[mid] >= nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // 1.3、如果循环结束还没找到跳跃点，说明数组没有排序，最大值在最后位置
    return nums.length - 1;
  }

  // 2、创建标准的有序数组的二分搜索函数，返回目标值索引
  function sortedArrayBinarySearch(nums, target, startIndex, endIndex) {
    let left = startIndex;
    let right = endIndex;

    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }

  // 3、边界条件预判，数组为空，返回-1
  if (nums.length === 0) {
    return -1;
  }

  // 4、获取跳跃点索引，依次来划分出左右两个有序的数组
  const jumpPointIndex = findJumpPointIndex(nums);

  // 5、判断目标值落在哪个有序数组中，并对其进行二分搜索，找到就返回目标索引
  if (target >= nums[0] && target <= nums[jumpPointIndex]) {
    return sortedArrayBinarySearch(nums, target, 0, jumpPointIndex);
  } else {
    return sortedArrayBinarySearch(
      nums,
      target,
      jumpPointIndex + 1,
      nums.length - 1
    );
  }
};
```

### 2.2、TypeScript Solution

```javascript
function search(nums: number[], target: number): number {
  function findJumpPointIndex(nums: number[]): number {
    if (nums.length === 1) {
      return 0;
    }

    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
      let mid: number = Math.floor(left + (right - left) / 2);

      if (nums[mid] > nums[mid + 1]) {
        return mid;
      }

      if (nums[mid] >= nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return nums.length - 1;
  }

  function sortedArrayBinarySearch(
    nums: number[],
    target: number,
    startIndex: number,
    endIndex: number
  ): number {
    let left: number = startIndex;
    let right: number = endIndex;

    while (left <= right) {
      let mid: number = Math.floor(left + (right - left) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }

  if (nums.length === 0) {
    return -1;
  }

  const jumpPointIndex: number = findJumpPointIndex(nums);

  if (target >= nums[0] && target <= nums[jumpPointIndex]) {
    return sortedArrayBinarySearch(nums, target, 0, jumpPointIndex);
  } else {
    return sortedArrayBinarySearch(
      nums,
      target,
      jumpPointIndex + 1,
      nums.length - 1
    );
  }
}
```

