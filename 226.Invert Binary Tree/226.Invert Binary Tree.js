/*
解题思路：递归
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归终止条件
  if (root === null) {
    return null;
  }

  let leftTree = invertTree(root.right);
  let rightTree = invertTree(root.left);

  root.left = leftTree;
  root.right = rightTree;

  return root;
};
