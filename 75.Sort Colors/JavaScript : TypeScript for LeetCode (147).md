# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode - 第75题 )  颜色分类**](https://leetcode-cn.com/problems/sort-colors/)
      


## 2、解题思路
**方法：双指针**
```javascript
【荷兰国旗问题】
1、创建两个边界，规定boundary1左边应该全是0，boundary2右边全是2
2、i指针复制遍历数组，遇到boundary2边界就停止
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let boundary1 = 0;
  let boundary2 = nums.length - 1;

  for (let i = 0; i <= boundary2; i++) {
    if (nums[i] === 0) {
      swap(nums, i, boundary1);
      boundary1++;
    }

    if (nums[i] === 2) {
      swap(nums, i, boundary2);
      boundary2--;
      i--;
    }
  }

  return nums;
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
```

### 2.2、TypeScript Solution

```javascript
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let boundary1: number = 0;
  let boundary2: number = nums.length - 1;

  for (let i: number = 0; i <= boundary2; i++) {
    if (nums[i] === 0) {
      swap(nums, i, boundary1);
      boundary1++;
    }

    if (nums[i] === 2) {
      swap(nums, i, boundary2);
      boundary2--;
      //i--的目的是让下次i停在原处，因为是从boundary2换过来的，还需要留着和boundary1交换
      i--;
    }
  }
}

function swap(nums: number[], i: number, j: number) {
  let temp: number = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
```

