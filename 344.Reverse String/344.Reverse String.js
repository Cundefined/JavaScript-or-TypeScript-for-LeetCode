/*
解题思路：方法一、双指针
时间复杂度：O(N)  执行了 N/2 次的交换。
空间复杂度：O(1)  只使用了常数级空间。
*/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  if (s.length === 0) {
    return [];
  }
  if (s.length === 1) {
    return;
  }

  for (let left = 0, right = s.length - 1; left < right; left++, right--) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};
