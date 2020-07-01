/*
解题思路：动态规划、贪心算法
方法一、动态规划【自上而下，开头到结尾-递归】
1、创建记录标记当前元素是否为通的memo数组，标记：0未知，-1不通，1可通,初始化为全0
2、将最后一个元素标记为1，因为是终点嘛，肯定可以通过
3、创建递归函数jupm():
    3.1、判断当前位置是否已标记，为1的话，是通路，返回true，为-1的话，不是通路，返回false
    3.2、为0的话，说明还未探测，准备起跳！！：
        3.2.1、计算最大跳跃距离，取当前位置+当前位置数字和输入数组最大索引的最小值，从而防止越界
        3.2.2、从当前位置下一个位置遍历到最大跳跃距离的每一个元素：
            3.2.2.1、开始跳跃！！保存返回的结果
            3.2.2.2、如果发现跳到了可以通过的元素上，就把当前位置标记为1，返回true
        3.2.3、跳完之后，还没有返回true的话，说明当前位置不通，应该标记为-1,同时返回false
4、调用递归函数，从第0位置开始跳
5、返回结果
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 1、创建记录标记当前元素是否为通的memo数组，标记：0未知，-1不通，1可通,初始化为全0
  const memo = Array(nums.length).fill(0);
  // 2、将最后一个元素标记为1，因为是终点嘛，肯定可以通过
  memo[nums.length - 1] = 1;

  // 3、创建递归函数jupm():
  function jump(position) {
    // 3.1、判断当前位置是否已标记，为1的话，是通路，返回true，为-1的话，不是通路，返回false
    if (memo[position] === 1) {
      return true;
    } else if (memo[position] === -1) {
      return false;
    }

    // 3.2、为0的话，说明还未探测，准备起跳！！：
    // 3.2.1、计算最大跳跃距离，取当前位置+当前位置数字和输入数组最大索引的最小值，从而防止越界
    const MaxJumpDistance = Math.min(
      position + nums[position],
      nums.length - 1
    );
    // 3.2.2、从当前位置下一个位置遍历到最大跳跃距离的每一个元素：
    for (let i = position + 1; i <= MaxJumpDistance; i++) {
      // 3.2.2.1、开始跳跃！！保存返回的结果，跳到标记为1的元素时，返回true
      const isCanThrough = jump(i);
      // 3.2.2.2、如果发现跳到了可以通过的元素上，就把当前位置标记为1，返回true
      if (isCanThrough === true) {
        memo[position] = 1;
        return true;
      }
    }

    // 3.2.3、跳完之后，还没有返回true的话，说明当前位置不通，应该标记为-1,同时返回false
    memo[position] = -1;
    return false;
  }

  // 4、调用递归函数，从第0位置开始跳
  let isCanThrough = jump(0);
  return isCanThrough;
};
