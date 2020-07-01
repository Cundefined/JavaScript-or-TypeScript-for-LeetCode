function maxSubArray(nums: number[]): number {

    if (nums.length === 0) {
        return 0;
    }

    let subArray: number[] = [];

    let max: number = nums[0];

    subArray[0] = nums[0];

    for (let i: number = 1; i < nums.length; i++) {
        subArray[i] = Math.max(nums[i] + subArray[i - 1], nums[i]);
        max = Math.max(max, subArray[i]);
    }

    return max;
};