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

function invertTree(root: TreeNode | null): TreeNode | null {
  // 递归终止条件
  if (root === null) {
    return null;
  }

  let leftTree: TreeNode | null = invertTree(root.right);
  let rightTree: TreeNode | null = invertTree(root.left);

  root.left = leftTree;
  root.right = rightTree;

  return root;
}
