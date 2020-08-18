function singleNumber(nums: number[]): number {
  for (let i: number = 1; i < nums.length; i++) {
    nums[0] = nums[0] ^ nums[i];
  }

  return nums[0];
}
