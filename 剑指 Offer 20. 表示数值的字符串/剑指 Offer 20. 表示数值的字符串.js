/*
解题思路：
考虑三种字符的合法情况：
1、+-号只能出现在【最前面 或 紧接着e(E)的后面 】
2、.前面，不能出现【. 或 e(E)】
3、e(E)前面，不能出现e(E)，只能出现数字
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  //预判
  if (s.length === 0) {
    return false;
  }

  //记录之前是否遇到过【三种特殊字符】
  let isSeenNum = false;
  let isSeenDot = false;
  let isSeenE = false;

  //去除前后空格
  s = s.trim();

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      isSeenNum = true;
    } else if (s[i] === "+" || s[i] === "-") {
      // 1、+-号只能出现在【最前面 或 紧接着e(E)的后面 】
      if (i !== 0 && s[i - 1] !== "e" && s[i - 1] !== "E") {
        return false;
      }
    } else if (s[i] === ".") {
      // 2、.前面，不能出现【. 或 e(E)】
      if (isSeenDot || isSeenE) {
        return false;
      }
      isSeenDot = true;
    } else if (s[i] === "e" || s[i] === "E") {
      // 3、e(E)前面，不能出现e(E)，只能出现数字
      if (isSeenE || !isSeenNum) {
        return false;
      }
      isSeenE = true;
      isSeenNum = false;
    } else {
      return false;
    }
  }

  return isSeenNum;
};
