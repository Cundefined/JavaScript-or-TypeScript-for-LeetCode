function findMin(nums: number[]): number | undefined {
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

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    } else if (nums[left] < nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
