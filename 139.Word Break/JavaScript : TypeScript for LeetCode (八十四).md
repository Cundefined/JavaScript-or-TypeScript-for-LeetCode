# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第139题 )  单词拆分**](https://leetcode-cn.com/problems/word-break/)
       




## 2、解题思路
```javascript
解题思路：动态规划
状态：dp[i] -- 表示0-i之间的字符串（包含i）是否可以被拆分，同时要求存在于wordDict中，才能设置为true，否则为false
状态转移方程：dp[i] = dp[j] && 【s.substring(j+1, i+1)在于wordDict中】
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // dp[i]初始化为false
  const dp = new Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    // 如果wordDict中有s.substring(0, i+1)的话，就不用拆分了，直接记录dp[i] = true，直接往后继续选择
    if (wordDict.indexOf(s.substring(0, i + 1)) !== -1) {
      dp[i] = true;
      continue;
    }

    // 否则，看看能不能把s.substring(0, i+1)的子字符串，再拆分，看看是否存在于wordDict
    // 以j位置为拆分点
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.indexOf(s.substring(j + 1, i + 1)) !== -1) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length - 1];
};
```

### 2.2、TypeScript Solution

```javascript
function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length).fill(false);

  for (let i: number = 0; i < s.length; i++) {
    if (wordDict.indexOf(s.substring(0, i + 1)) !== -1) {
      dp[i] = true;
      continue;
    }

    for (let j: number = 0; j < i; j++) {
      if (dp[j] && wordDict.indexOf(s.substring(j + 1, i + 1)) !== -1) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length - 1];
}
```

