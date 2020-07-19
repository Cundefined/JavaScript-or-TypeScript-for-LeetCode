function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length <= 1) {
    return false;
  }

  let map: Map<number, number | undefined> = new Map();

  for (let i: number = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && map.get(nums[i]) !== undefined) {
      if (i - map.get(nums[i]) >= k) {
        return true;
      }
    } else {
      map.set(nums[i], i);
    }
  }

  return false;
}
