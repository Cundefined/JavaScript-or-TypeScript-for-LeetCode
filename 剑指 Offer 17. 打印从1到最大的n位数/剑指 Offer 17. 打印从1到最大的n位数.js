/*
解题思路：方法一：暴力法
直接Math.pow(10, n) - 1得到上界
*/
/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const res = [];

  for (let i = 1; i <= Math.pow(10, n) - 1; i++) {
    res[i - 1] = i;
  }

  return res;
};
