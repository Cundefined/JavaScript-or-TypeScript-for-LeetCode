/*
解题思路：哈希表
遍历数组，检查当前元素是否出现过：
    1、如果之前没有出现过，说明是第一次出现，标记为1
    2、如果出现过，直接返回该元素
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      return nums[i];
    }
  }
};
