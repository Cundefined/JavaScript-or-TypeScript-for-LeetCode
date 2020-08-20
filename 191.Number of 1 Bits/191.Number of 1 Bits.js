/*
解题思路：
注意：无符号整数 0~65535
当需要移位的数为正数时，有符号位移（>>）和无符号位移（>>>）是相同的。
当需要移位的数为负数时，有符号位移（>>）的结果 还为负数，无符号位移（>>>）的结果为正数。
有符号位移运算时如果数字为正数时位移后在前面补0，为负数时则在位移后在前面补1
1、创建计数变量，记录1的个数
2、while循环，要把无符号正整数依次右移，当右边的1全部移除的时候，该数变为0，此时，就停止循环计数了：
    2.1、n & 1可判断当前数的二进制最右边的那位是否为1，为1的话返回1，为0的话返回0
    2.2、把无符号正整数进行无符号右移
3、循环结束后，返回计数
*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  // 1、创建计数变量，记录1的个数
  let countOne = 0;

  // 2、while循环，要把无符号正整数依次右移，当右边的1全部移除的时候，该数变为0，此时，就停止循环计数了：
  while (n !== 0) {
    // 2.1、n & 1可判断当前数的二进制最右边的那位是否为1，为1的话返回1，为0的话返回0
    countOne = countOne + (n & 1);

    // 2.2、把无符号正整数进行无符号右移
    n = n >>> 1;
  }

  //   3、循环结束后，返回计数
  return countOne;
};
