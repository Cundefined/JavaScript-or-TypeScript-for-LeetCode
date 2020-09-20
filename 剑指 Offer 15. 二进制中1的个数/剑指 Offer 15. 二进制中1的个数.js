/*
解题思路：位运算
任何数与1按位与的话，就可以判断其最右边的那位是否为1！！
*/
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n > 0) {
    if (n & 1) {
      count++;
    }
    n = n >>> 1;
  }

  return count;
};
