/*
解题思路：动态规划、贪心算法
方法三、贪心算法
1、创建一个记录终点位置的变量
2、从结尾倒数第二个元素遍历到起点位置
    2.1、如果当前元素值加上当前元素位置索引大于等于终点位置索引，说明当前元素可以跳到终点位置
    2.2、此时要把终点位置往前移到当前元素的位置
4、如果终点位置最后移到起点位置，说明可以到达终点
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 1、创建一个记录终点位置的变量
  let endPosition = nums.length - 1;
  // 2、从结尾倒数第二个元素遍历到起点位置
  for (let i = nums.length - 2; i >= 0; i--) {
    //  2.1、如果当前元素值加上当前元素位置索引大于等于终点位置索引，说明当前元素可以跳到终点位置
    if (i + nums[i] >= endPosition) {
      endPosition = i;
    }
  }

  return endPosition === 0;
};
