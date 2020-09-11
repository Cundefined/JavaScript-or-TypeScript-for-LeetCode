function combinationSum3(k: number, n: number): number[][] {
  const path: number[] = [];
  const res: number[][] = [];

  dfs(k, n, path, res, 1);
  return res;

  function dfs(
    k: number,
    n: number,
    path: number[],
    res: number[][],
    startIndex: number
  ) {
    //   一、递归结束条件
    if (k === 0 && n === 0) {
      res.push([...path]);
      return;
    }
    // 由于每种组合中不存在重复的数字，每次for循环都去当前选择以后的数字里去找，
    // 所有其实索引是变化的，依次递增
    // 第一次dfs的for循环是从1~9中选一个数
    for (let item: number = startIndex; item < 10; item++) {
      // 二、回溯三部曲
      // 1、设置现场(需要判断啥时候可以设置现场)
      if (item <= n) {
        path.push(item);
        // 2、dfs -- 继续选择当前组合中的下一个数字，
        // 此时为第二次dfs，它的for循环是从第一层选的数后面的所有数字中选一个数
        // 保证不和前面选择的数字重合
        dfs(k - 1, n - item, path, res, item + 1);
        // 3、恢复现场
        path.pop();
      }
    }
  }
}
