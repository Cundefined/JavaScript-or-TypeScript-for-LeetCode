function findMin(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }

  let left: number = 0;
  let right: number = nums.length - 1;


  if (nums[right] > nums[left]) {
    return nums[0];
  }

  while (left < right) {

    let mid: number = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  }

  return nums[right];
};