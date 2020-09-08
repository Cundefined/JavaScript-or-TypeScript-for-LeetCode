/*
解题思路：回溯法
*/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  if (n < k || k <= 0) {
    return res;
  }

  function dfs(path, start) {
    // 递归终止条件
    if (path.length === k) {
      res.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++, start++) {
      if (path.includes(i)) {
        continue;
      }
      // 选
      path.push(i);
      // 继续看下一层的选择
      dfs(path, start);
      // 不选，撤回当前选择，回溯
      // 递归之前做了什么，递归之后需要做相同操作的逆向操作
      path.pop();
    }
  }

  dfs([], 1);
  return res;
};
