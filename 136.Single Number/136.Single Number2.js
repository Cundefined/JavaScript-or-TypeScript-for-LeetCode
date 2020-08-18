/*
解题思路：方法二、使用“二进制” -- 按位异或运算
注意：异或运算满足交换律和结合律，相同的元素异或得0，0与任何元素异或得其本身
1、记录一下数组第一个元素
2、for循环遍历数组，用第一个元素依次往后，与所有元素进行异或运算
3、返回剩下的那个元素，就是只出现一次的那个元素
时间复杂度--O(n)  空间复杂度--O(1)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1、记录一下数组第一个元素
  let xorRes = nums[0];

  // 2、for循环遍历数组，用第一个元素依次往后，与所有元素进行异或运算
  for (let i = 1; i < nums.length; i++) {
    xorRes = xorRes ^ nums[i];
  }

  // 3、返回剩下的那个元素，就是只出现一次的那个元素
  return xorRes;
};
