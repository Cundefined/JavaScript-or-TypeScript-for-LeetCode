/*
解题思路：周期字符串
1、边界条件预判，如果A和B的长度不相等，那肯定旋转得不到，直接返回false
2、A字符串拼接自己，变成两个周期的字符串，只要旋转能得到B，那B肯定是这个周期字符串的子字符串
3、返回B是否属于该周期字符串的子字符串
*/

 /**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {

  // 1、边界条件预判，如果A和B的长度不相等，那肯定旋转得不到，直接返回false
  if (A.length !== B.length) {
    return false;
  }

  // 2、A字符串拼接自己，变成两个周期的字符串，只要旋转能得到B，那B肯定是这个周期字符串的子字符串
  const periodicStr = A + A;

  // 3、返回B是否属于该周期字符串的子字符串
  return periodicStr.includes(B);
};
