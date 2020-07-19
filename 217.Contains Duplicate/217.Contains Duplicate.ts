function containsDuplicate(nums: number[]): boolean {
  let set: Set<number> = new Set();

  for (let i: number = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }

  return false;
}
