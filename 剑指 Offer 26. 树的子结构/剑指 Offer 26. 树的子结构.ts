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

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  // 递归结束条件
  if (A === null || B === null) {
    return false;
  }
  return (
    helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
}

function helper(A: TreeNode | null, B: TreeNode | null): boolean {
  // 递归结束条件
  if (B === null) {
    return true;
  }
  if (A === null) {
    return false;
  }

  return A.val === B.val && helper(A.left, B.left) && helper(A.right, B.right);
}
