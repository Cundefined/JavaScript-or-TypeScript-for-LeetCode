function singleNumber(nums: number[]): number {
  let map: Map<number, number> = new Map();

  for (let i: number = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], 2);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (const keyValue of map) {
    if (keyValue[1] === 1) {
      return keyValue[0];
    }
  }
}
