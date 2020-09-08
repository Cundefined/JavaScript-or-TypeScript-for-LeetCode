/*
解题思路：遍历数组
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let countOne = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      countOne++;
    } else {
      countOne = 0;
    }
    maxLength = Math.max(maxLength, countOne);
  }

  return maxLength;
};
