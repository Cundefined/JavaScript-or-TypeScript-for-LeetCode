/*
解题思路：动态规划、贪心算法
方法三、贪心算法
*/
function canJump(nums: number[]): boolean {
  let endPosition: number = nums.length - 1;

  for (let i: number = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= endPosition) {
      endPosition = i;
    }
  }

  return endPosition === 0;
}
