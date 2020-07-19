/*
解题思路：利用map字典记录元素出现次数
1、边界条件预判，数组为空或者只有一个元素的话，肯定没有重复元素了
2、创建一个map字典，键为数组元素，值为该元素的索引
3、for循环遍历数组元素：
    3.1、判断map里有没有当前元素，没有的话，就加进去
    3.2、有的话，就判断当前元素的索引 - 之前存在map中的值 是否小于等于k,是的话，就返回true
    3.3、要是大于等于k的话，得更新之前的索引值
4、循环结束，还没return的话，说明没有满足要求的重复元素，返回false

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // 1、边界条件预判，数组为空或者只有一个元素的话，肯定没有重复元素了
  if (nums.length <= 1) {
    return false;
  }

  // 2、创建一个map字典，键为数组元素，值为该元素的索引
  let map = new Map();

  // 3、for循环遍历数组元素：
  for (let i = 0; i < nums.length; i++) {
    // 3.1、判断map里有没有当前元素，没有的话，就加进去
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else if (i - map.get(nums[i]) <= k) {
      // 3.2、有的话，就判断当前元素的索引 - 之前存在map中的值 是否小于等于k,是的话，就返回true
      return true;
    } else {
      // 3.3、要是大于等于k的话，得更新之前的索引值
      map.set(nums[i], i);
    }
  }

  // 4、循环结束，还没return的话，说明没有满足要求的重复元素，返回false
  return false;
};
