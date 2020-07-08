function rob(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    // 这里可以不创建记忆数组，只需要创建两个变量即可，优化空间复杂度
    // prev2表示在当前房屋的前前个房屋可以抢到的最大金额
    // prev1表示在当前房屋的前一个房屋可以抢到的最大金额
    let prev2: number = nums[0];
    let prev1: number = Math.max(nums[1], nums[0]);

    for (let i: number = 2; i < nums.length; i++) {
        let temp: number = Math.max(nums[i] + prev2, prev1);
        prev2 = prev1;
        prev1 = temp;
    }

    return prev1;
};