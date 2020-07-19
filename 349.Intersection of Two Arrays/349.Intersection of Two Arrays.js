/*
解题思路：利用集合元素唯一性
1、边界条件预判
2、创建一个set集合，存储两个数组的交集元素
3、for循环遍历nums1数组：
    3.1、如果nums2数组包含当前元素，则说明是交集元素，将其添加进Set中
4、遍历结束后，将set集合转成数组返回
*/

/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var intersection = function (nums1, nums2) {
  // 1、边界条件预判
  if (nums1.length === 0 && nums2.length === 0) {
    return [];
  }
  // 2、创建一个set集合，存储两个数组的交集元素
  const resultSet = new Set();
  //优化：把nums2转成Set集合
  const nums2Set = new Set(nums2);

  // 3、for循环遍历nums1数组：
  for (let i = 0; i < nums1.length; i++) {
    // 3.1、如果nums2数组包含当前元素，则说明是交集元素，将其添加进Set中
    // 优化：nums2.includes()其实就是for循环，时间复杂度为O(n)，
    // 若把nums2数组转换成set或者map，利用has()方法，时间复杂度为O(1)
    // if (nums2.includes(nums1[i])) {
    //   resultSet.add(nums1[i]);
    // }
    if (nums2Set.has(nums1[i])) {
      resultSet.add(nums1[i]);
    }
  }

  // 4、遍历结束后，将set集合转成数组返回
  return Array.from(resultSet);
};
