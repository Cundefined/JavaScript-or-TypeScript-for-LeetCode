function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length;

    while (left <= right) {
        let mid: number = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};