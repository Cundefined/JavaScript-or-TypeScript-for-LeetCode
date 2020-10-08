/*
解题思路：双指针【荷兰国旗问题】
1、创建两个边界，规定boundary1左边应该全是0，boundary2右边全是2
2、i指针复制遍历数组，遇到boundary2边界就停止
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let boundary1 = 0;
  let boundary2 = nums.length - 1;

  for (let i = 0; i <= boundary2; i++) {
    if (nums[i] === 0) {
      swap(nums, i, boundary1);
      boundary1++;
    }

    if (nums[i] === 2) {
      swap(nums, i, boundary2);
      boundary2--;
      i--;
    }
  }

  return nums;
};

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
