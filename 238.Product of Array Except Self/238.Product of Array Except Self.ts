function productExceptSelf(nums: number[]): number[] {
  let result: number[] = new Array<number>(nums.length).fill(1);

  let leftProduct: number = 1;

  for (let i: number = 0; i < nums.length; i++) {
    result[i] = result[i] * leftProduct;
    leftProduct = leftProduct * nums[i];
  }

  let rightProduct = 1;
  for (let i: number = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    rightProduct = rightProduct * nums[i];
  }

  return result;
}
