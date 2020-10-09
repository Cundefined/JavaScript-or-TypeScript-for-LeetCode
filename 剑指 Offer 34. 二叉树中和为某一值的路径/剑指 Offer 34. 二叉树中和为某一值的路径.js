/*
解题思路：深度优先递归 回溯
创建dfs函数：
    1、递归结束条件
    2、将当前非空节点加入路径
    3、将当前节点值从目标sum中减去
    4、碰到叶子节点 就把path加入结果
    5、递归遍历左子树
    6、递归遍历右子树
    7、回溯
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const res = [];
  const path = [];
  dfs(root, sum, res, path);
  return res;
};

function dfs(root, sum, res, path) {
  if (root === null) {
    return;
  }

  path.push(root.val);

  sum = sum - root.val;

  if (root.left === null && root.right === null && sum === 0) {
    res.push([...path]);
  }

  dfs(root.left, sum, res, path);
  dfs(root.right, sum, res, path);

  path.pop();
}
