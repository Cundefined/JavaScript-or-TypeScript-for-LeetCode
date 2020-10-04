/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function mirrorTree(root: TreeNode | null): TreeNode | null {
  // 递归结束条件
  if (root === null) {
    return null;
  }

  //递归获取左右子树
  let leftSubTree: TreeNode | null = mirrorTree(root.right);
  let rightSubTree: TreeNode | null = mirrorTree(root.left);

  //获得的左右子树，重新连接到当前根节点
  root.left = leftSubTree;
  root.right = rightSubTree;

  return root;
}
