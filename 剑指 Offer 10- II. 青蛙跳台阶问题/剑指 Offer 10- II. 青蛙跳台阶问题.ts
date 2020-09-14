/*
优化空间复杂度
*/
function numWays(n: number): number {
  if (n <= 1) {
    return 1;
  }

  let prev2: number = 1;
  let prev1: number = 1;

  let currWays: number = 0;

  for (let i: number = 2; i <= n; i++) {
    currWays = (prev1 + prev2) % 1000000007;
    prev2 = prev1;
    prev1 = currWays;
  }

  return currWays;
}
