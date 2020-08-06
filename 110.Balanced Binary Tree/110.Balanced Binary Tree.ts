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

function isBalanced(root: TreeNode | null): boolean {
  function calculateTreeHeight(currNode: TreeNode | null): number {
    if (currNode === null) {
      return 0;
    }

    let leftNodeHeight: number = calculateTreeHeight(currNode.left);
    let rightNodeHeight: number = calculateTreeHeight(currNode.right);

    let currNodeHeight: number = Math.max(leftNodeHeight, rightNodeHeight) + 1;
    return currNodeHeight;
  }

  if (root === null) {
    return true;
  }

  let leftNodeHeight: number = calculateTreeHeight(root.left);
  let rightNodeHeight: number = calculateTreeHeight(root.right);

  if (Math.abs(leftNodeHeight - rightNodeHeight) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}
