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

function inorderTraversal(root: TreeNode | null): number[] {
  function inOrderSearch(currNode: TreeNode | null, res: number[]) {
    if (currNode === null) {
      return;
    }

    inOrderSearch(currNode.left, res);

    res.push(currNode.val);

    inOrderSearch(currNode.right, res);
  }

  let res: number[] = [];

  inOrderSearch(root, res);

  return res;
}
