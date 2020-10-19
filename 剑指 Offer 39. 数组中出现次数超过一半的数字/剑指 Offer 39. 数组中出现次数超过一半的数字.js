/*
解题思路：方法一、哈希表
1、利用map字典，遍历统计每个元素出现的次数
2、找到map中出现次数超过数长度一半的那个元素

时间 -- O(N)
空间 -- O(N)
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  for (const item of nums) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  for (const keyValue of map) {
    if (keyValue[1] >= nums.length / 2) {
      return keyValue[0];
    }
  }
};
