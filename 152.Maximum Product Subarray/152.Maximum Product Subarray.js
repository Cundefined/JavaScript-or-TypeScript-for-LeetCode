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
