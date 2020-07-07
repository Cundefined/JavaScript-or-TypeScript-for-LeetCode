# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第152题 )  乘积最大子数组**
      给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
​	  **示例 1:**

```javascript
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
```
**示例 2:**
```javascript
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-product-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：参考53题.最大子序和  【动态规划】
 1. 创建两个空记忆数组，分别用来存储最大乘积的子数组和最小乘积的子数组（因为很小的负数很有可能会咸鱼翻身）

 2. 两个空记忆数组初始化为第一个元素
 3. 创建一个保存最大值的变量，预先存入第一个元素
 4. 遍历输入数组：
 	4.1、对当前要加入最大乘积子数组的元素进行判断
      4.2、是直接加入nums[i]，还是以nums[i]新开一个数组
      4.3、比较nums[i]、最大乘积子数组元素之积、nums[i]*minProductMemo[i-1]，前者大就以nums[i]新开数组,中间大就直接加入nums[i],最后的加入minProductMemo[i-1]
      4.4、对最小乘积的子数组进行同样的操作
      4.5、比较完成后，更新保存最大值的变量
 6. 返回结果

### 2.1、JavaScript Solution

```javascript
/*
解题思路：参考53题.最大子序和  【动态规划】
1、创建两个空记忆数组，分别用来存储最大乘积的子数组和最小乘积的子数组（因为很小的负数很有可能会咸鱼翻身）
2、两个空记忆数组初始化为第一个元素 
3、创建一个保存最大值的变量，预先存入第一个元素
4、遍历输入数组：
      4.1、对当前要加入最大乘积子数组的元素进行判断
      4.2、是直接加入nums[i]，还是以nums[i]新开一个数组
      4.3、比较nums[i]、最大乘积子数组元素之积、nums[i]*minProductMemo[i-1]，前者大就以nums[i]新开数组,中间大就直接加入nums[i],最后的加入minProductMemo[i-1]
      4.4、对最小乘积的子数组进行同样的操作
      4.4、比较完成后，更新保存最大值的变量
 5、返回结果
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 1、创建两个空记忆数组，分别用来存储最大乘积的子数组和最小乘积的子数组（因为很小的负数很有可能会咸鱼翻身）
  const maxProductMemo = [];
  const minProductMemo = [];
  // 2、两个空记忆数组初始化为第一个元素
  maxProductMemo[0] = nums[0];
  minProductMemo[0] = nums[0];

  // 3、创建一个保存最大值的变量，预先存入第一个元素
  let max = nums[0];

  // 4、遍历输入数组：
  for (let i = 1; i < nums.length; i++) {
    // 4.1、对当前要加入最大乘积子数组的元素进行判断
    // 4.2、是直接加入nums[i]，还是以nums[i]新开一个数组
    // 4.3、比较nums[i]、最大乘积子数组元素之积、nums[i]*minProductMemo[i-1]，前者大就以nums[i]新开数组,中间大就直接加入nums[i],最后的加入minProductMemo[i-1]
    maxProductMemo[i] = Math.max(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );
    // 4.4、对最小乘积的子数组进行同样的操作
    minProductMemo[i] = Math.min(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );

    // 4.4、比较完成后，更新保存最大值的变量
    max = Math.max(max, maxProductMemo[i]);
  }

  //    5、返回结果
  return max;
};
```


### 2.2、TypeScript Solution

```javascript
function maxProduct(nums: number[]): number {
  const maxProductMemo: number[] = [];
  const minProductMemo: number[] = [];

  maxProductMemo[0] = nums[0];
  minProductMemo[0] = nums[0];

  let max: number = nums[0];

  for (let i: number = 1; i < nums.length; i++) {
    maxProductMemo[i] = Math.max(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );

    minProductMemo[i] = Math.min(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );

    max = Math.max(max, maxProductMemo[i]);
  }

  return max;
}
```

