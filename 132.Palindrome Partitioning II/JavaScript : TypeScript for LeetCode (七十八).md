# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第132题 )  分割回文串 II**
      
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回符合要求的最少分割次数。

**示例 :**
```javascript
输入: "aab"
输出: 1
解释: 进行一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-partitioning-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


## 2、解题思路
```javascript
解题思路：动态规划
state: f[i] 【前i个字符】组成的子字符串需要最少几次cut(个数-1为索引)
function: f[i] = MIN{f[j]+1}, j < i && [j+1 ~ i]这一段是一个回文串
intialize: f[i] = i - 1 (f[0] = -1)
answer: f[s.length()]
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  if (s.length <= 1) {
    return 0;
  }

  const dp = new Array(s.length + 1);

  dp[0] = -1;

  for (let i = 1; i <= s.length; i++) {
    // 初始化 前i个字符，最多可以切分i-1次
    dp[i] = i - 1;

    // 判断i前面的字符中，哪个字符到i是回文（找到最先到i是回文的位置j）
    for (let j = 0; j < i; j++) {
      if (isPalindrome(s, j, i - 1)) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[s.length];

  // 创建判断是否为回文的函数，后续调用
  function isPalindrome(s, left, right) {
    // 开始while循环，若left<right，则一直判断，一直移动：
    while (left < right) {
      // 如果一旦发现left和right指向的两个字符不相等，那就直接返回false，不用再循环了
      if (s[left] !== s[right]) {
        return false;
      }
      // 否则，就继续移动指针
      left++;
      right--;
    }

    // 4、全部遍历结束后，说明是回文，返回true
    return true;
  }
};

```

### 2.2、TypeScript Solution

```javascript
function minCut(s: string): number {
  if (s.length <= 1) {
    return 0;
  }

  const dp: number[] = new Array(s.length + 1);

  dp[0] = -1;

  for (let i: number = 1; i <= s.length; i++) {
    // 初始化 前i个字符，最多可以切分i-1次
    dp[i] = i - 1;

    // 判断i前面的字符中，哪个字符到i是回文（找到最先到i是回文的位置j）
    for (let j: number = 0; j < i; j++) {
      if (isPalindrome(s, j, i - 1)) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }

  return dp[s.length];

  // 创建判断是否为回文的函数，后续调用
  function isPalindrome(s: string, left: number, right: number): boolean {
    // 开始while循环，若left<right，则一直判断，一直移动：
    while (left < right) {
      // 如果一旦发现left和right指向的两个字符不相等，那就直接返回false，不用再循环了
      if (s[left] !== s[right]) {
        return false;
      }
      // 否则，就继续移动指针
      left++;
      right--;
    }

    // 4、全部遍历结束后，说明是回文，返回true
    return true;
  }
}
```

