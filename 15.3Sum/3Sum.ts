function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a: number, b: number) => a - b);

  for (let i: number = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let j: number = i + 1,
        k: number = nums.length - 1;
      while (j < k) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;

          while (j < k && nums[j] === nums[j - 1]) {
            j++;
          }

          while (j < k && nums[k] === nums[k + 1]) {
            k--;
          }
        } else if (nums[i] + nums[j] + nums[k] < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  }

  return result;
}
