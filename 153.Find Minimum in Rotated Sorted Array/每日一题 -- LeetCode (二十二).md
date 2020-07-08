# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第153题 )  寻找旋转排序数组中的最小值**
       假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
请找出其中最小的元素。
你可以假设数组中不存在重复元素。



​	  **示例 1:**

```javascript
输入: [3,4,5,1,2]
输出: 1
```
**示例 2:**
```javascript
输入: [4,5,6,7,0,1,2]
输出: 0
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：先考虑翻转分界区再二分搜索
 1. 预判，输入数组只有一个元素，则返回第一个元素即为最小值
 

 2. 创建二分搜索的两个指针，初始分别指向数组开头和结尾
 3. 先判断给定数组是否被反转，若没反转就直接返回第一个元素即最小值
 4. while循环，left<right时，一直搜索：
 	4.1、计算mid中间位置
    4.2、先考虑翻转分界区： 
     


        4.2.1、如果mid位置元素>mid+1位置元素，说明不递增，突然减小，那mid+1元素就是最小值
        4.2.2、如果mid-1位置元素>mid位置元素,说明不递增，突然减小，那mid元素就是最小值				
 	4.3、开始二分搜索：
		
		4.3.1、如果left元素<mid元素，说明mid在最小值的左边，即最小值在mid的右边，应抛弃左半边，left指针右移
        4.3.2、否则，right指针左移


### 2.1、JavaScript Solution

```javascript
/*
解题思路：先考虑翻转分界区再二分搜索
1、预判，输入数组只有一个元素，则返回第一个元素即为最小值
2、创建二分搜索的两个指针，初始分别指向数组开头和结尾
3、先判断给定数组是否被反转，若没反转就直接返回第一个元素即最小值
4、while循环，left<right时，一直搜索：
    4.1、计算mid中间位置
    4.2、先考虑翻转分界区：
        4.2.1、如果mid位置元素>mid+1位置元素，说明不递增，突然减小，那mid+1元素就是最小值
        4.2.2、如果mid-1位置元素>mid位置元素,说明不递增，突然减小，那mid元素就是最小值
    4.3、开始二分搜索：
        4.3.1、如果left元素<mid元素，说明mid在最小值的左边，即最小值在mid的右边，应抛弃左半边，left指针右移
        4.3.2、否则，right指针左移
*/

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

    // 4.2、先考虑翻转分界区：
    // 4.2.1、如果mid位置元素>mid+1位置元素，说明不递增，突然减小，那mid+1元素就是最小值
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // 4.2.2、如果mid-1位置元素>mid位置元素,说明不递增，突然减小，那mid元素就是最小值
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    // 4.3、开始二分搜索：
    if (nums[left] < nums[mid]) {
      // 4.3.1、如果left元素<mid元素，说明mid在最小值的左边，即最小值在mid的右边，应抛弃左半边，left指针右移
      left = mid + 1;
    } else {
      // 4.3.2、否则，right指针左移
      right = mid - 1;
    }
  }
};
```


### 2.2、TypeScript Solution

```javascript
function findMin(nums: number[]): number | undefined {
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

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    } else if (nums[left] < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
```

