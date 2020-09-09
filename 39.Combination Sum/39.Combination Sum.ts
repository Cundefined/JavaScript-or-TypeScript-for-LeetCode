function combinationSum(candidates: number[], target: number): number[][] {
  if (candidates.length === 0) {
    return [];
  }

  function dfs(
    start: number,
    candidates: number[],
    path: number[],
    res: number[][],
    target: number
  ): void {
    //   递归结束条件
    if (target === 0) {
      // 深拷贝
      res.push([...path]);
      return;
    }

    for (let i: number = start; i < candidates.length; i++) {
      if (candidates[i] <= target) {
        //   回溯三部曲
        // 1、选择
        path.push(candidates[i]);

        // 2、从当前选择继续看下一次选还是不选
        dfs(i, candidates, path, res, target - candidates[i]);

        // 3、撤销当前选择
        path.pop();
      }
    }
  }

  const path: number[] = [];
  const res: number[][] = [];

  dfs(0, candidates, path, res, target);

  return res;
}
