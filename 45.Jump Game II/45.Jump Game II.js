/*
解题思路：动态规划
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const arrayLength = nums.length;
  if (arrayLength <= 1) {
    return 0;
  }

  //f[i]为从起点跳到点i需要的最小步数
  const dp = new Array(arrayLength);

  //创建变量，记录第一个可以到达当前位置的指针
  let firstCanReachCurrPos = 0;
  for (let i = 0; i < arrayLength; i++) {
    if (i === 0) {
      //初始化，第一个位置不需要跳跃就可以到达
      dp[i] = 0;
    } else {
      // 从第二个位置（i=1）开始，while循环寻找第一个可以到达当前位置的位置，
      // 找不到就把指针一直往后移动（只要指针不超过当前位置就一直移动）
      // 1、如果找到了，说明firstCanReachCurrPos + nums[firstCanReachCurrPos] >= i，则会退出循环，把当前位置的dp值更新为第一个可以调到当前位置的位置再跳一步就行
      // 2、如果没找到，说明firstCanReachCurrPos >= i，指针已经移到当前位置了，此时也会退出循环，说明不可能到达当前位置，则达到不了终点，返回0
      while (
        firstCanReachCurrPos < i &&
        firstCanReachCurrPos + nums[firstCanReachCurrPos] < i
      ) {
        firstCanReachCurrPos++;
      }

      if (firstCanReachCurrPos === i) {
        return 0;
      }
      dp[i] = dp[firstCanReachCurrPos] + 1;
    }
  }

  return dp[arrayLength - 1];
};
