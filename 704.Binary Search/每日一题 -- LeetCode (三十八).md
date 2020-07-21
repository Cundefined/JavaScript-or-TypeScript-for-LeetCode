# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第704题 )  二分查找**
       
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。




​	  **示例 1:**

```javascript
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```
**示例 2:**
```javascript
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```
**提示：**

 1. 你可以假设 nums 中的所有元素是不重复的。 
 2. n 将在 [1, 10000]之间。 
 3. nums 的每个元素都将在 [-9999, 9999]之间。
 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：二分查找
 1. 创建两个指针，初始分别指向数组的开头和结尾
 

 2. while循环，当left<=right时，继续查找，否则停止查找：
 	2.1、计算中间位置，向下取整
    2.2、如果中间位置的值等于目标值，直接返回中间位置
    2.3、如果中间位置的值小于目标值，left指针往右移到mid+1
    2.4、否则中间位置的值大于目标值，right指针往左移到mid-1
 3. 循环结束，还没返回目标索引的话，说明没找到，直接返回-1
 
**注意**：二分查找的难点在于，“边界”的处理，比如为什么left<=right，不取等于会怎么样
    可以把等号去掉，看看报错，发现如果输入数组只有1个元素，且为目标值时，两个指针就必须重合不同的问题，边界的选取也要具体分析

### 2.1、JavaScript Solution

```javascript
/*
解题思路：二分查找
1、创建两个指针，初始分别指向数组的开头和结尾
2、while循环，当left<=right时，继续查找，否则停止查找：
    2.1、计算中间位置，向下取整
    2.2、如果中间位置的值等于目标值，直接返回中间位置
    2.3、如果中间位置的值小于目标值，left指针往右移到mid+1
    2.4、否则中间位置的值大于目标值，right指针往左移到mid-1
3、循环结束，还没返回目标索引的话，说明没找到，直接返回-1

注意：二分查找的难点在于，“边界”的处理，比如为什么left<=right，不取等于会怎么样
    可以把等号去掉，看看报错，发现如果输入数组只有1个元素，且为目标值时，两个指针就必须重合
    不同的问题，边界的选取也要具体分析
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 1、创建两个指针，初始分别指向数组的开头和结尾
  let left = 0;
  let right = nums.length - 1;

  // 2、while循环，当left<=right时，继续查找，否则停止查找：
  while (left <= right) {
    // 2.1、计算中间位置，向下取整
    // left + (right - left) / 2其实等价于（left + right）/ 2
    // 但前者是为了防止计算时超过整型的范围，容错，默认写法
    let mid = Math.floor(left + (right - left) / 2);

    // 2.2、如果中间位置的值等于目标值，直接返回中间位置
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // 2.3、如果中间位置的值小于目标s值，left指针往右移到mid+1
      left = mid + 1;
    } else {
      // 2.4、否则中间位置的值大于目标值，right指针往左移到mid-1

      right = mid - 1;
    }
  }

  // 3、循环结束，还没返回目标索引的话，说明没找到，直接返回-1
  return -1;
};
```


### 2.2、TypeScript Solution

```javascript
function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length;

    while (left <= right) {
        let mid: number = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};
```

