function search(nums: number[], target: number): number {
  function findJumpPointIndex(nums: number[]): number {
    if (nums.length === 1) {
      return 0;
    }

    let left: number = 0;
    let right: number = nums.length - 1;

    while (left <= right) {
      let mid: number = Math.floor(left + (right - left) / 2);

      if (nums[mid] > nums[mid + 1]) {
        return mid;
      }

      if (nums[mid] >= nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return nums.length - 1;
  }

  function sortedArrayBinarySearch(
    nums: number[],
    target: number,
    startIndex: number,
    endIndex: number
  ): number {
    let left: number = startIndex;
    let right: number = endIndex;

    while (left <= right) {
      let mid: number = Math.floor(left + (right - left) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }

  if (nums.length === 0) {
    return -1;
  }

  const jumpPointIndex: number = findJumpPointIndex(nums);

  if (target >= nums[0] && target <= nums[jumpPointIndex]) {
    return sortedArrayBinarySearch(nums, target, 0, jumpPointIndex);
  } else {
    return sortedArrayBinarySearch(
      nums,
      target,
      jumpPointIndex + 1,
      nums.length - 1
    );
  }
}
