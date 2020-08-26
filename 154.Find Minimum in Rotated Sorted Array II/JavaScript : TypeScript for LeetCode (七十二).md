# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第225题 )  用队列实现栈**
       
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

注意数组中可能存在重复的元素。



**示例 1：**
```typescript
输入: [1,3,5]
输出: 1
```
**示例 2：**
```typescript
输入: [2,2,2,0,1]
输出: 0
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
```javascript
解题思路：先考虑翻转分界区再二分搜索
参考【153.Find Minimum in Rotated Sorted Array】
1、预判，输入数组只有一个元素，则返回第一个元素即为最小值
2、创建二分搜索的两个指针，初始分别指向数组开头和结尾
3、先判断给定数组是否被反转，若没反转就直接返回第一个元素即最小值
4、while循环，left<right时，一直搜索：
     4.1、计算mid中间位置
     4.2、开始二分搜索
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 1、预判，输入数组只有一个元素，则返回第一个元素即为最小值
  if (nums.length === 1) {
    return nums[0];
  }
  // 2、创建二分搜索的两个指针，初始分别指向数组开头和结尾
  let left = 0;
  let right = nums.length - 1;

  // 3、先判断给定数组是否被反转，若没反转就直接返回第一个元素即最小值
  if (nums[right] > nums[left]) {
    return nums[0];
  }

  // 4、while循环，left<right时，一直搜索：
  while (left < right) {
    // 4.1、计算mid中间位置
    let mid = Math.floor(left + (right - left) / 2);

    // 4.2、开始二分搜索：
    if (nums[mid] < nums[right]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  }

  return nums[right];
};

```

### 2.2、TypeScript Solution

```javascript
function findMin(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let left: number = 0;
  let right: number = nums.length - 1;


  if (nums[right] > nums[left]) {
    return nums[0];
  }

  while (left < right) {

    let mid: number = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  }

  return nums[right];
};
```

