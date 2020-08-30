/*
解题思路：动态规划
state: f[i] 【前i个字符】组成的子字符串需要最少几次cut(个数-1为索引)
function: f[i] = MIN{f[j]+1}, j < i && [j+1 ~ i]这一段是一个回文串
intialize: f[i] = i - 1 (f[0] = -1)
answer: f[s.length()]
*/
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
