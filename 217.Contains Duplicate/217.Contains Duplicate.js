/*
解题思路：利用set集合元素唯一性
1、创建一个set集合
2、遍历数组的元素：
    2.1、判断set是否有当前元素，有的话就说明重复了，返回true
    2.2、没有的话，就添加进set，不做操作
3、全部遍历完还没返回true的话，说明没有重复，返回false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 1、创建一个set集合
  let set = new Set();

  // 2、遍历数组的元素：
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      // 2.1、判断set是否有当前元素，有的话就说明重复了，返回true
      return true;
    } else {
      // 2.2、没有的话，就添加进set，不做操作
      set.add(nums[i]);
    }
  }

  // 3、全部遍历完还没返回true的话，说明没有重复，返回false
  return false;
};
