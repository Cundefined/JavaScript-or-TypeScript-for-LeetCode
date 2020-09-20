function cuttingRope(n: number): number {
  // n至少为2，2，3，4不符合上述规律，需单独考虑
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  if (n === 4) {
    return 4;
  }

  let res: number = 1;
  while (n > 4) {
    // n大于4时，只需要不断减去3，即可优先切出很多长度为3的小段
    n = n - 3;

    // 每切出一个长度为3的小段，就计入乘积结果中，防止溢出，需要大数取模
    res = (res * 3) % 1000000007;
  }

  //切分出很多长度为3的小段后，剩下长度小于4了，不好切分了，直接计入乘积结果中
  return (res * n) % 1000000007;
}
