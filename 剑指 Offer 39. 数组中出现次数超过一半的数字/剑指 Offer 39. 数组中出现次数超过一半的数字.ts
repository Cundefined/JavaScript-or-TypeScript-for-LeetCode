/*
解题思路：摩尔投票法
正反抵消原则：
    1、发现目标 票数+1
    2、发现非目标 票数-1
如果遍历结束，发现票数为正，则说明目标数量大于半数

时间 -- O(N)
空间 -- O(1)
*/
function majorityElement(nums: number[]): number {
    let vote: number = 0;
    let target: number = nums[0];

    for (const num of nums) {
        if (vote === 0) {
            target = num;
            vote++;
        } else if (target === num) {
            vote++;
        } else {
            vote--;
        }
    }

    return target;
};