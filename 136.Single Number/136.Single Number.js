/*
解题思路：方法一、使用map字典
1、创建map字典，键为数组元素，值为出现次数
2、for循环将数组元素加入map
3、找出map中值为1的键
时间复杂度--O(n)  空间复杂度--O(n)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1、创建map字典，键为数组元素，值为出现次数
  let map = new Map();

  // 2、for循环将数组元素加入map
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], 2);
    } else {
      map.set(nums[i], 1);
    }
  }

  // 3、找出map中值为1的键
  for (const keyValue of map) {
    if (keyValue[1] === 1) {
      return keyValue[0];
    }
  }
};
