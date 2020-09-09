/*
解题思路：回溯法
回溯三部曲
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (candidates.length === 0) {
    return [];
  }

  function dfs(start, candidates, path, res, target) {
    //   递归结束条件
    if (target === 0) {
      // 深拷贝
      res.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
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

  const path = [];
  const res = [];

  dfs(0, candidates, path, res, target);

  return res;
};
