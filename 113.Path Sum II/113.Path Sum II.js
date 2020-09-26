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

  dfs(root, sum, []);
  return res;

  function dfs(root, sum, path) {
    // 1、递归结束条件
    if (root === null) {
      return;
    }
    // 2、将当前非空节点加入路径
    path.push(root.val);
    // 3、将当前节点值从目标sum中减去
    sum = sum - root.val;
    // 4、碰到叶子节点 就把path加入结果
    if (root.left === null && root.right === null && sum === 0) {
      res.push([...path]);
    }

    // 5、递归遍历左子树
    dfs(root.left, sum, path);

    // 6、递归遍历右子树
    dfs(root.right, sum, path);

    // 7、回溯
    path.pop();
  }
};
