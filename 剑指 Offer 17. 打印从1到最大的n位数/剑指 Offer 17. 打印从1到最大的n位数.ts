/*
解题思路：方法二：快速幂
参考：【剑指 Offer 16. 数值的整数次方】
《快速幂算法》
例如：求a的11次
11 = (1011)b = 2的3次 * 1 + 2的2次 * 1 + 2的1次 * 1 + 2的0次 * 1
a的11次 = （a的8次 * 1） * （a的4次 * 0）* （a的2次 * 1）* （a的0次 * 1）
注意：二进制的每一位控制是否需要把a的次方乘进最后的结果中
    所以，关键在于判断每一位是否为1，为1就乘如，不为1就不乘入，只需要把幂的二进制右移一位继续判断
*/
function printNumbers(n: number): number[] {
  const res: number[] = [];

  let powerRes: number = 1.0;
  let base: number = 10;

  // 快速幂算法
  //循环移位n的二进制，从最右边依次往左边判断每一位是否为1
  while (n > 0) {
    if ((n & 1) === 1) {
      powerRes = powerRes * base;
    }

    base *= base;

    n = n >>> 1;
  }

  for (let i: number = 1; i <= powerRes - 1; i++) {
    res[i - 1] = i;
  }

  return res;
}
