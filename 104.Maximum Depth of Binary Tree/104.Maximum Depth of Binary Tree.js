/*
解题思路：方法一：递归
1、递归函数maxDepth()的定义：maxDepth(root)，返回从该根节点开始的二叉树最大深度
2、递归函数的出口条件：当给定root节点不存在时，说明到树底了，返回0
3、否则当root节点存在时，那么说明该二叉树深度至少为1，则应该返回1+Math.max(maxDepth(root.left),maxDepth(root.right))
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let maxTreeDepth = 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  return maxTreeDepth;
};
