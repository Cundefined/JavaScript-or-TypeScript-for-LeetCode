/*
解题思路：方法一、递归
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  if (root === null) {
    return res;
  }

  dfs(root, res);
  return res;
};

function dfs(root, res) {
  // 递归结束条件
  if (root === null) {
    return;
  }

  // 后序遍历
  dfs(root.left, res);
  dfs(root.right, res);
  res.push(root.val);
}
