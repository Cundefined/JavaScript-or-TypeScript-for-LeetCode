/*
解题思路：
借助新字符串操作
*/
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  if (s.length === 0) {
    return s;
  }

  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      newStr += "%20";
    } else {
      newStr += s[i];
    }
  }

  return newStr;
};
