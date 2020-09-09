function findRepeatNumber(nums: number[]): number | undefined {
  const map: Map<number, number> = new Map();

  for (let i: number = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      return nums[i];
    }
  }
}
