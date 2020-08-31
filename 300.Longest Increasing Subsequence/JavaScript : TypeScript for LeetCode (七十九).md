# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第300题 )  最长上升子序列**
     给定一个无序的整数数组，找到其中最长上升子序列的长度。

**示例:**

```javascript
输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
```

**说明:**

 - 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。 
 - 你算法的时间复杂度应该为 O(n2) 。 

**进阶**:你能将算法的时间复杂度降低到 O(n log n) 吗?

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。




## 2、解题思路
**方法一：动态规划**
```javascript
f[i] 表示从0开始到i结尾的最长上升序列（可以是不连续的）长度
f[i] = max(f[j]+1,f[i]) ,a[j]<a[i]
f[0...n-1] = 1
max(f[0]...f[n-1])

时间复杂度 -- O(n2) 两次for循环
空间复杂度 -- O(n) 开辟了一个和输入数组一样大的dp数组
```
**方法二：二分查找**

```javascript
新建数组saveLIS，用于保存最长上升子序列。
对原序列进行遍历，将每位元素【二分插入saveLIS中】

1、如果saveLIS中元素都比它小，将它插到最后
2、否则，用它覆盖掉【比它大的元素中最小】的那个。
目的：让saveLIS中存储比较小的元素。这样，saveLIS 未必是真实的最长上升子序列，但长度是对的

时间复杂度 -- O(nlogn) 一次for循环，一次二分搜索
空间复杂度 -- O(n) 
```

### 2.1、JavaScript Solution
**方法一：动态规划**
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const arrayLength = nums.length;
  if (arrayLength <= 1) {
    return arrayLength;
  }

  const dp = new Array(arrayLength);

  //创建结果变量，初始化为1，最短也是自己一个
  let res = 1;

  for (let i = 0; i < arrayLength; i++) {
    // 只考虑当前位置的数字
    dp[i] = 1;
    // 再一个一个往前，考虑当前位置之前的所有元素
    for (let j = i - 1; j >= 0; j--) {
      // 如果找到比自己小的元素，看看是不是呢构成长度更长的上升序列
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }

      //   结果选出dp数组中最大的那个值，即为最大长度的上升序列
      res = Math.max(res, dp[i]);
    }
  }

  return res;
};
```

### 2.2、TypeScript Solution
**方法二：二分查找**
```javascript
function lengthOfLIS(nums: number[]): number {
  const arrayLength: number = nums.length;
  if (arrayLength <= 1) {
    return arrayLength;
  }

  const saveLIS: number[] = [];

  for (let i: number = 0; i < arrayLength; i++) {
    insertToSave(nums[i]);
  }
  return saveLIS.length;

  function insertToSave(element: number): void {
    if (saveLIS.length === 0) {
      saveLIS.push(element);
      return;
    }

    // 利用二分查找，将元素插入到saveLIS数组中
    let left: number = 0;
    let right: number = saveLIS.length - 1;

    while (left <= right) {
      let mid: number = Math.floor(left + (right - left) / 2);

      if (saveLIS[mid] === element) {
        return;
      } else if (saveLIS[mid] < element) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    saveLIS[left] = element;
  }
}
```

