/*
解题思路：回溯法
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res = new Set();
  const isVisited = [];

  dfs("", s, isVisited, res);
  return [...res];
};

function dfs(path, s, isVisited, res) {
  // 递归结束条件
  if (path.length === s.length) {
    //path装满就加入结果数组
    return res.add(path);
  }

  //递归主体，依次选择s中的每个字符
  for (let i = 0; i < s.length; i++) {
    //去重
    if (isVisited[i] === true) {
      continue;
    }

    isVisited[i] = true;
    path = path + s[i];
    dfs(path, s, isVisited, res);
    isVisited[i] = false;
    //回溯
    path = path.substring(0, path.length - 1);
  }
}
