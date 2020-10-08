/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let boundary1: number = 0;
  let boundary2: number = nums.length - 1;

  for (let i: number = 0; i <= boundary2; i++) {
    if (nums[i] === 0) {
      swap(nums, i, boundary1);
      boundary1++;
    }

    if (nums[i] === 2) {
      swap(nums, i, boundary2);
      boundary2--;
      //i--的目的是让下次i停在原处，因为是从boundary2换过来的，还需要留着和boundary1交换
      i--;
    }
  }
}

function swap(nums: number[], i: number, j: number) {
  let temp: number = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
