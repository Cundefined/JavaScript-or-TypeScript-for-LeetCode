/*
解题思路：
1、边界条件预判:
    1.1、如果子字符串为空，则返回0
    1.2、如果母字符串短于子字符串，返回-1
2、创建变量，保存两个字符串长度之差，来限制遍历范围
3、for循环遍历母字符串：
    3.1、如果子字符串等于母字符串的某个子字符串，则说明包含，返回该起始索引
4、遍历结束，还没返回的话，说明没有，返回-1

*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 1.1、如果子字符串为空，则返回0
  if (needle.length === 0) {
    return 0;
  }
  // 1.2、如果母字符串短于子字符串，返回-1
  if (haystack.length < needle.length) {
    return -1;
  }

  // 2、创建变量，保存两个字符串长度之差，来限制遍历范围
  let limit = haystack.length - needle.length;

  // 3、for循环遍历母字符串：
  for (let i = 0; i <= limit; i++) {
    // 3.1、如果子字符串等于母字符串的某个子字符串，则说明包含，返回该起始索引
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  // 4、遍历结束，还没返回的话，说明没有，返回-1
  return -1;
};
