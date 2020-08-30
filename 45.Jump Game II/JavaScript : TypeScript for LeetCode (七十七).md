# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第45题 )  跳跃游戏 II**
       
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

**示例 :**
```javascript
输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
```
**说明:**

假设你总是可以到达数组的最后一个位置。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
```javascript
解题思路：动态规划
f[i]为从起点跳到点i需要的最小步数
```


### 2.1、JavaScript Solution

```javascript
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
```

### 2.2、TypeScript Solution

```javascript
function jump(nums: number[]): number {
  const arrayLength: number = nums.length;
  if (arrayLength <= 1) {
    return 0;
  }

  //f[i]为从起点跳到点i需要的最小步数
  const dp: number[] = new Array<number>(arrayLength);

  //创建变量，记录第一个可以到达当前位置的指针
  let firstCanReachCurrPos: number = 0;
  for (let i: number = 0; i < arrayLength; i++) {
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
}
```

