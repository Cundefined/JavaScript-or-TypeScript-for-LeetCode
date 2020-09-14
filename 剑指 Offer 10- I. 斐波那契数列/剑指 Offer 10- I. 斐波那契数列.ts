/*
优化空间复杂度：
只使用两个变量去记忆化存储前两个数值
*/
function fib(n: number): number {
  if (n <= 1) {
    return n;
  }

  let prev2: number = 0;
  let prev1: number = 1;

  let res: number = 0;

  for (let i: number = 2; i <= n; i++) {
    res = (prev1 + prev2) % 1000000007;
    prev2 = prev1;
    prev1 = res;
  }

  return res;
}
