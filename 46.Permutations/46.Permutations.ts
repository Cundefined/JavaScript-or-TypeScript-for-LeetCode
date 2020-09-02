function permute(nums: number[]): number[][] {
  const res: number[][] = [];

  function dfs(path: number[]): void {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }

    for (let i: number = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) {
        continue;
      }
      path.push(nums[i]);
      dfs(path);
      // 撤销选择，回溯法，就是往回退一步
      path.pop();
    }
  }

  // dfs搜索，一直往下搜索做出选择，开始路径为空
  dfs([]);

  return res;
}
