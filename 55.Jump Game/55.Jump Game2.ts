/*
解题思路：动态规划、贪心算法
方法二、动态规划【自下而上,结尾到开头】
*/
function canJump(nums: number[]): boolean {
    const memo: number[] = Array(nums.length).fill(0);

    memo[nums.length -1] = 1;

    for (let i: number = nums.length - 2; i >= 0; i--) {
        let MaxJumpDistance: number = Math.min(i + nums[i], nums.length -1);

        for (let j: number = i + 1; j <= MaxJumpDistance; j++) {
            if (memo[j] === 1) {
                memo[i] = 1;
                break;
            }
        }
    }

    return memo[0] === 1;
}