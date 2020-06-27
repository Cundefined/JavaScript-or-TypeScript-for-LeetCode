/**
 * 解题思路:sliding window(滑动窗口/双指针)
 * 1、创建一个set集合
 * 2、创建两个指针：
 *      2.1、第一个指针i随着for循环遍历字符串
 *      2.2、第二个指针j指向字符串开头
 * 3、遍历字符串，判断能否加入到set集合
 *      3.1、如果set中没有s[i],说明目前为止还没有重复的字符，就把s[i]添加到Set集合中
 *      3.2、如果set中有s[i]，说明发现重复的字符，则从set里开始删除s[j],并且递增j，而且再检查set里是否仍有s[i],有的话，重复3.2直到Set里没有s[i]为止
 *      3.3、重复3.1和3.2,直到遍历完整个字符串
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 1、创建一个set集合
  const set = new Set();
  // 2、创建两个指针：
  let i = 0,
    j = 0,
    maxLength = 0;
  // 对输入字符串做判断，当传入空字符串时，return 0
  if (s.length === 0) {
    return 0;
  }
  // 3、遍历字符串，判断能否加入到set集合
  for (i; i < s.length; i++) {
    // 3.1、如果set中没有s[i],说明目前为止还没有重复的字符，就把s[i]添加到Set集合中
    if (!set.has(s[i])) {
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      // 3.2、如果set中有s[i]，说明发现重复的字符，则从set里开始删除s[j],并且递增j，而且再检查set里是否仍有s[i],有的话，重复3.2直到Set里没有s[i]为止
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength;
};