# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 21 )  调整数组顺序使奇数位于偶数前面**](https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/)
      


## 2、解题思路
**方法一、首尾双指针**
```javascript
解题思路：双指针
方法一、首尾双指针
```
**方法二、快慢双指针**
```javascript
解题思路：双指针
方法二、快慢双指针
优点：可使得一侧元素有序
快慢双指针：两个指针如果都从数组开头向后移动的话，可以使得【奇数有序】
          两个指针如果都从数组末尾向前移动的话，可以使得【偶数有序】
```

### 2.1、JavaScript Solution
**方法一、首尾双指针**
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    //左侧遇到偶数，固定左侧指针不动，去右侧找奇数，找到就交换
    while ((nums[left] & 1) === 0 && left < right) {
      // 去右侧找到奇数，找到了就交换，交换了就退出循环，移动左侧指针
      if ((nums[right] & 1) !== 0) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        break;
      } else {
        //没找到的话，right指针一直往左移动
        right--;
      }
    }
    left++;
  }

  return nums;
};

```

### 2.2、TypeScript Solution
**方法二、快慢双指针**
```javascript
function exchange(nums: number[]): number[] {
  //快指针主要负责遍历数组，且遇到偶数先停下判断
  let fast: number = 0;
  let slow: number = 0;

  for (fast; fast < nums.length; fast++) {
    //遇到奇数先停下判断，把奇数往前挪
    if ((nums[fast] & 1) !== 0) {
      //避免数组第一个元素为奇数时，让fast停下来比较，此时两个指针在一起，就不用比较了
      //后面只要fast开始移到，就一定一直在slow前面
      if (fast !== slow) {
        let temp = nums[fast];
        nums[fast] = nums[slow];
        nums[slow] = temp;
      }
      //fast碰到偶数，就移动slow指针
      slow++;
    }
  }

  return nums;
}

```

