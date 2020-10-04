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
var mirrorTree = function (root) {
  // 递归结束条件
  if (root === null) {
    return null;
  }

  //递归获取左右子树
  let leftSubTree = mirrorTree(root.right);
  let rightSubTree = mirrorTree(root.left);

  //获得的左右子树，重新连接到当前根节点
  root.left = leftSubTree;
  root.right = rightSubTree;

  return root;
};
