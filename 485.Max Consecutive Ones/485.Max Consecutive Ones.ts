function findMaxConsecutiveOnes(nums: number[]): number {
  let countOne: number = 0;
  let maxLength: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      countOne++;
    } else {
      countOne = 0;
    }
    maxLength = Math.max(maxLength, countOne);
  }

  return maxLength;
}
