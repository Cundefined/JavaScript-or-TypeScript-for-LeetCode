/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i: number = 0;
  let j: number = 0;

  for (i; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (j; j < nums.length; j++) {
    nums[j] = 0;
  }

}

