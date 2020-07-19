/*
解题思路：动态规划
1、边界条件预判：
    1.1、输入数组为空，返回0
    1.2、输入数组长度为1，返回该元素
2、创建记忆数组，记录到达第i个房屋时，可以抢到的最大金额
3、手动添加前两个房屋可以抢的最大金额：
    3.1、第一个房屋，只能抢它，莫得选择
    3.2、第二个房屋，可以抢当前房屋或者抢第一个房屋，比较取较大者
4、到了第三个往后所有房屋，都有两种选择，for循环依次遍历，处理选择：
    4.1、memo[i]表示到达当前房屋可以抢的最大金额
    4.2、第一种选择：抢当前的房屋并且加上之前在第i-2房屋可以抢的最大金额
    4.3、第二种选择：不抢当前的房屋，直接看看在第i-1的房屋最大金额是多少
    4.4、两种选择取个最大值就是当前房屋可以抢到的最大金额
5、遍历完成后，返回劫匪达到最后一个房屋可以抢到的累计金额即为最大值
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 1、边界条件预判：
  //   1.1、输入数组为空，返回0
  if (nums.length === 0) {
    return 0;
  }
  //   1.2、输入数组长度为1，返回该元素
  if (nums.length === 1) {
    return nums[0];
  }

  // 2、创建记忆数组，记录到达第i个房屋时，可以抢到的最大金额
  let memo = [];

  // 3、手动添加前两个房屋可以抢的最大金额：
  //   3.1、第一个房屋，只能抢它，莫得选择
  memo[0] = nums[0];
  //   3.2、第二个房屋，可以抢当前房屋或者抢第一个房屋，比较取较大者
  memo[1] = Math.max(nums[1], nums[0]);

  // 4、到了第三个往后所有房屋，都有两种选择，for循环依次遍历，处理选择：
  for (let i = 2; i < nums.length; i++) {
    // 4.1、memo[i]表示到达当前房屋可以抢的最大金额
    memo[i] = Math.max(nums[i] + memo[i - 2], memo[i - 1]);
  }

  // 5、遍历完成后，返回劫匪达到最后一个房屋可以抢到的累计金额即为最大值
  return memo[nums.length - 1];
};