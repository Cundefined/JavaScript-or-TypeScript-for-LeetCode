function minimumOperations(leaves: string): number {
  // 1、状态
  const dp: number[][] = new Array<number[]>(leaves.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array<number>(3);
  }
  // 2、初始化，第一片叶子只可能是【红】状态
  dp[0][0] = leaves[0] === "r" ? 0 : 1;

  // 3、遍历所有叶子集
  for (let i = 1; i < leaves.length; i++) {
    //从第二片叶子，有可能是:
    // 【红】->【红】
    dp[i][0] = dp[i - 1][0] + (leaves[i] == "r" ? 0 : 1);
    // 【红】->【红黄】
    dp[i][1] = dp[i - 1][0] + (leaves[i] == "y" ? 0 : 1);

    //从第三片叶子，需要额外考虑:
    if (i > 1) {
      // 【红黄】->【红黄】
      dp[i][1] = Math.min(dp[i][1], dp[i - 1][1] + (leaves[i] == "y" ? 0 : 1));
      // 【红黄】->【红黄红】
      dp[i][2] = dp[i - 1][1] + (leaves[i] == "r" ? 0 : 1);
    }

    //从第四片叶子，需要额外考虑：
    if (i > 2) {
      // 【红黄红】->【红黄红】
      dp[i][2] = Math.min(dp[i][2], dp[i - 1][2] + (leaves[i] == "r" ? 0 : 1));
    }
  }

  return dp[leaves.length - 1][2];
}
