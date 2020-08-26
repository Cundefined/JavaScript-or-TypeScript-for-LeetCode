/*
解题思路：二分查找
1、标准的二分查找模板
注意：在循环结束还没返回的话，说明没找到，此时应该返回left，因为left = mid + 1，
    即可按照递增排在mid后面
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};
