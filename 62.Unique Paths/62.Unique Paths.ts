function uniquePaths(m: number, n: number): number {
  const memo: number[][] = [];
  for (let i: number = 0; i < m; i++) {
    memo.push([]);
  }

  for (let col: number = 0; col < n; col++) {
    memo[0][col] = 1;
  }

  for (let row: number = 0; row < m; row++) {
    memo[row][0] = 1;
  }

  for (let row: number = 1; row < m; row++) {
    for (let col: number = 1; col < n; col++) {
      memo[row][col] = memo[row][col - 1] + memo[row - 1][col];
    }
  }

  return memo[m - 1][n - 1];
}
