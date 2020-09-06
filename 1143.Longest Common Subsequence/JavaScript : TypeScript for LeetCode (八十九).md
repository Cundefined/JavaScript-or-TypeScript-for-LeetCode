# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第1143题 )  最长公共子序列**](https://leetcode-cn.com/problems/longest-common-subsequence/)
       




## 2、解题思路
**方法：动态规划**
```javascript
1、状态：dp[i][j] -- text1的0~i个和text2的0~j个字符最长公共子序列的字符个数
2、初始化dp矩阵，左上角，第一行，第一列
3、一般情况，状态转移方程(两种情况):
    3.1、如果当前位置text1[row] === text2[col]，则dp[row][col] = dp[row - 1][col - 1] + 1;
        即左上角dp值 + 1
    3.2、否则，dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
        即当前位置左边和上边的dp值，取较大的那个
时间复杂度 -- O(len1 * len2)
空间复杂度 -- O(len1 * len2)
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const len1 = text1.length;
  const len2 = text2.length;

  //创建二维的dp矩阵
  // const dp = new Array(len1);
  // for (let i = 0; i < dp.length; i++) {
  //   dp[i] = new Array(len2).fill(0);
  // }
  const dp = Array.from(new Array(len1), () => new Array(len2).fill(0));

  //初始化dp
  //左上角
  dp[0][0] = text1[0] === text2[0] ? 1 : 0;
  //第一行（遍历第一行的所有列）,除了左上角
  for (let col = 1; col < len2; col++) {
    //当出现一个1时，后面不管字符相不相等，都只能取1，所以和前面一位取较大的那个
    dp[0][col] = Math.max(text1[0] === text2[col] ? 1 : 0, dp[0][col - 1]);
  }
  //第一列（遍历第一行的所有列）,除了左上角
  for (let row = 1; row < len1; row++) {
    dp[row][0] = Math.max(text1[row] === text2[0] ? 1 : 0, dp[row - 1][0]);
  }

  //一般情况，状态转移方程
  for (let row = 1; row < len1; row++) {
    for (let col = 1; col < len2; col++) {
      if (text1[row] === text2[col]) {
        dp[row][col] = dp[row - 1][col - 1] + 1;
      } else {
        dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
      }
    }
  }

  return dp[len1 - 1][len2 - 1];
};
```

### 2.2、TypeScript Solution

```javascript
function longestCommonSubsequence(text1: string, text2: string): number {
  const len1: number = text1.length;
  const len2: number = text2.length;

  //创建二维数组dp
  const dp: number[][] = Array.from(new Array(len1), () =>
    new Array(len2).fill(0)
  );

  //初始化dp
  //左上角
  dp[0][0] = text1[0] === text2[0] ? 1 : 0;

  //第一行（遍历第一行的所有列）,除了左上角
  for (let col: number = 1; col < len2; col++) {
    //当出现一个1时，后面不管字符相不相等，都只能取1，所以和前面一位取较大的那个
    dp[0][col] = Math.max(text1[0] === text2[col] ? 1 : 0, dp[0][col - 1]);
  }
  //第一列（遍历第一行的所有列）,除了左上角
  for (let row: number = 1; row < len1; row++) {
    dp[row][0] = Math.max(text1[row] === text2[0] ? 1 : 0, dp[row - 1][0]);
  }

  //一般情况，状态转移方程
  for (let row: number = 1; row < len1; row++) {
    for (let col: number = 1; col < len2; col++) {
      if (text1[row] === text2[col]) {
        dp[row][col] = dp[row - 1][col - 1] + 1;
      } else {
        dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
      }
    }
  }

  return dp[len1 - 1][len2 - 1];
}
```

