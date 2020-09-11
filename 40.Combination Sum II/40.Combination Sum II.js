/*
解题思路：递归回溯法
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const path = [];
  const res = [];

  // 对数组从小到大排序，方便查看前一个相同元素有没有被访问过
  candidates.sort();
  dfs(candidates, target, path, res, 0);

  return res;

  function dfs(candidates, target, path, res, start) {
    // 递归结束条件
    if (target < 0) {
      return;
    }
    if (target === 0) {
      res.push([...path]);
      return;
    }

    // 递归总体程序
    for (let i = start; i < candidates.length; i++) {
      // 去重
      if (i !== start && candidates[i] === candidates[i - 1]) {
        continue;
      }

      //回溯三部曲【归去来兮】
      path.push(candidates[i]);
      dfs(candidates, target - candidates[i], path, res, i + 1);
      path.pop();
    }
  }
};
