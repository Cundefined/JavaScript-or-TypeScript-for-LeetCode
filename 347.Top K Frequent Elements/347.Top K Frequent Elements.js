/*
解题思路：
1、利用map字典统计数组所有元素出现的次数
2、选出前k个高频出现的元素
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  const res = [];
  for (const item of nums) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  //根据map创建数组，便于后续对其中的val排序
  // array是二维数组，每个元素都是长度为2的数组，第一个值为key，第二个值为val
  //   [ [ 1, 3 ], [ 2, 2 ], [ 3, 1 ] ]
  const array = Array.from(map);

  //a[1] - b[1]表示“子数组的第二个值为val”，对val从大到小排序
  array.sort(function (a, b) {
    return b[1] - a[1];
  });

  //截取前k个val，并返回对应的元素
  for (const item of array.splice(0, k)) {
    res.push(item[0]);
  }
  return res;
};
