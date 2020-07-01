/*
解题思路：动态规划、贪心算法
方法一、动态规划【自上而下，开头到结尾-递归】
*/
function canJump(nums: number[]): boolean {

    const memo: number[] = Array(nums.length).fill(0);

    memo[nums.length -1] = 1;

    function jump(position: number): boolean {
        if (memo[position] === 1) {
            return true;
        } else if (memo[position] === -1){
            return false;
        }

        let MaxJumpDistance: number = Math.min(position + nums[position], nums.length -1);
        for (let i: number = position + 1; i <= MaxJumpDistance; i++) {
            let isCanThrough = jump(i);
            if (isCanThrough === true) {
                memo[position] = 1;
                return true;
            }
        }

        memo[position] = -1;
        return false;
    }

    let isCanThrough: boolean = jump(0);
    return isCanThrough;
};