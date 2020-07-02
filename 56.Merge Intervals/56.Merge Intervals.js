/*
解题思路：
1、预判输入数组里面的元素是否<=1，是的话，直接返回
2、将数组中的区间按照起始位置排序，如果起始位置相同的话，就按结束位置排序
3、用mergingInterval数组记录当前合并的最大区间
4、创建保存结果的数组
5、遍历数组中的每一个区间：
    5.1、如果当前区间的起始位置<=mergingInterval的终点位置,则可以合并，并更新mergingInterval的终点
    5.2、如果当前区间的起始位置>=mergingInterval的终点位置，则无法合并，并把mergingInterval数组push进结果数组中，把mergingInterval数组更新为当前遍历到的当前数组
6、返回结果数组

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 1、预判输入数组里面的元素是否<=1，是的话，直接返回
  if (intervals.length <= 1) {
    return intervals;
  }

  // 2、将数组中的区间按照起始位置排序，如果起始位置相同的话，就按结束位置排序
  intervals.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });

  // 3、用mergingInterval数组记录当前合并的最大区间
  let mergingInterval = intervals[0];
  // 4、创建保存结果的数组
  let result = [];

  // 5、遍历数组中的每一个区间：
  for (let i = 1; i < intervals.length; i++) {
    // 5.1、如果当前区间的起始位置<=mergingInterval的终点位置,则可以合并，并更新mergingInterval的终点
    if (intervals[i][0] <= mergingInterval[1]) {
      mergingInterval[1] = Math.max(mergingInterval[1], intervals[i][1]);
    } else {
      // 5.2、如果当前区间的起始位置>=mergingInterval的终点位置，则无法合并，并把mergingInterval数组push进结果数组中，把mergingInterval数组更新为当前遍历到的当前数组
      result.push(mergingInterval);
      mergingInterval = intervals[i];
    }
  }

  // 6、返回结果数组
  result.push(mergingInterval);


  return result;
};
