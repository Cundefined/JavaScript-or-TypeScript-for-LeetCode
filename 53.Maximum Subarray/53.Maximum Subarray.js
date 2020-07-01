/**
 * 解题思路：动态规划
 * 1、创建一个空数组，用来存储子数组
 * 2、创建一个保存最大值的变量
 * 3、预先存入第一个元素
 * 4、遍历输入数组：
 *      4.1、对当前要加入子数组的元素进行判断
 *      4.2、是直接加入nums[i]，还是以nums[i]新开一个数组
 *      4.3、比较子数组元素之和与nums[i]，前者大就直接加入nums[i],后者大就以nums[i]新开数组
 *      4.4、比较完成后，更新最大子序列和
 * 5、返回结果
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 1、创建一个空数组，用来存储子数组
  let subArray = [];
  // 2、创建一个保存最大值的变量
  let max = nums[0];
  // 3、预先存入第一个元素
  subArray[0] = nums[0];

  // 4、遍历输入数组：
  for (let i = 1; i < nums.length; i++) {
    // 4.1、对当前要加入子数组的元素进行判断
    subArray[i] = Math.max(nums[i] + subArray[i - 1], nums[i]);
    // 4.4、比较完成后，更新最大子序列和
    max = Math.max(max, subArray[i]);
  }

  // 5、返回结果
  return max;
};
