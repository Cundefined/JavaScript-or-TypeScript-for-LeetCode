function maxProduct(nums: number[]): number {
  const maxProductMemo: number[] = [];
  const minProductMemo: number[] = [];

  maxProductMemo[0] = nums[0];
  minProductMemo[0] = nums[0];

  let max: number = nums[0];

  for (let i: number = 1; i < nums.length; i++) {
    maxProductMemo[i] = Math.max(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );

    minProductMemo[i] = Math.min(
      nums[i],
      nums[i] * maxProductMemo[i - 1],
      nums[i] * minProductMemo[i - 1]
    );

    max = Math.max(max, maxProductMemo[i]);
  }

  return max;
}
