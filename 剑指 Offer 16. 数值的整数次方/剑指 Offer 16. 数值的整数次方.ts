function myPow(x: number, n: number): number {
  // 边界条件
  if (x === 0) {
    return 0;
  }

  let res: number = 1.0;

  // 幂为负时，需要倒一下，转换成(1/x)的正n次方
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  //循环移位n的二进制，从最右边依次往左边判断每一位是否为1
  while (n > 0) {
    if ((n & 1) === 1) {
      res = res * x;
    }

    x = x * x;

    n = n >>> 1;
  }

  return res;
}
