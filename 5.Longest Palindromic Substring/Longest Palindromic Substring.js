
/**
 * 解题方法:中心扩散思想（中心对称就是回文嘛）
 * 1、预判，输入字符串长度<=1时，直接返回该字符串
 * 2、定义两个变量：
 *      2.1、start变量，记录当前找到的最大回文字符串的起始位置
 *      2.2、maxLength变量，记录最大回文字符串的长度（那终止位置就是start+maxLength）
 * 3、创建一个中心扩散算法的函数，函数需要判断4个条件：
 *      3.1、判断中心的左边是否越界
 *      3.2、判断中心的右边是否越界
 *      3.3、判断右边索引是否大于等于左边索引
 *      3.4、判断左边字符是否等于右边字符
 *      3.5、若同时满足上述3个条件：则需要再判断最大回文字符串的长度是否需要更新，更新后，left--,right++
 * 4、遍历整个字符串，每个中心位置处都需要扩散两边（调用中心扩散函数两次）
 *      4.1、第一遍扩散 left=i-1, right=i+1 (奇数个字符，中心位置存在)
 *      4.2、第二遍扩散 left=i, right=i+1（偶数个字符，中心位置不存在）
 */


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 1、预判，输入字符串长度为空或者<=1时，直接返回该字符串
  if (s.length <= 1) {
    return s;
  }
  // 2、定义两个变量：
  // 2.1、start变量，记录当前找到的最大回文字符串的起始位置
  let start = 0;
  // 2.2、maxLength变量，记录最大回文字符串的长度（那终止位置就是start+maxLength）
  // maxLength至少为1嘛
  let maxLength = 1;

  // 3、创建一个中心扩散算法的函数，函数需要判断4个条件
  function expandAroundCenter(left, right) {
    // 3.1、判断中心的左边是否越界
    // 3.2、判断中心的右边是否越界
    // 3.3、判断右边索引是否大于等于左边索引
    // 3.4、左边字符是否等于右边字符
    while (
      left >= 0 &&
      right <= s.length - 1 &&
      right >= left &&
      s[left] === s[right]
    ) {
      // 若同时满足上述3个条件：则需要再判断最大回文字符串的长度是否需要更新，更新后，left--,right++
      if (right - left + 1 > maxLength) {
        // 更新变量
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }

  // 4、遍历整个字符串，每个中心位置处都需要扩散两边（调用中心扩散函数两次）
  for (let i = 0; i < s.length; i++) {
    // 4.1、第一遍扩散 left=i-1, right=i+1
    expandAroundCenter(i - 1, i + 1);
    // 4.2、第二遍扩散 left=i, right=i+1
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
};

