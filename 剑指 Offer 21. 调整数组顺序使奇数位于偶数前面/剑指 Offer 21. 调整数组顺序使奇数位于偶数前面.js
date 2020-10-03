/*
解题思路：双指针
方法一、首尾双指针
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    //左侧遇到偶数，固定左侧指针不动，去右侧找奇数，找到就交换
    while ((nums[left] & 1) === 0 && left < right) {
      // 去右侧找到奇数，找到了就交换，交换了就退出循环，移动左侧指针
      if ((nums[right] & 1) !== 0) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        break;
      } else {
        //没找到的话，right指针一直往左移动
        right--;
      }
    }
    left++;
  }

  return nums;
};
