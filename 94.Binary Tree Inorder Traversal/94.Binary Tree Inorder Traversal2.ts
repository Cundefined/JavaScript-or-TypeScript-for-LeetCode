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
  let stack: Array<TreeNode | null> = [];
  let res: number[] = [];

  let currNode: TreeNode | null = root;

  while (currNode !== null || stack.length !== 0) {
    if (currNode !== null) {
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      currNode = stack.pop();
      res.push(currNode.val);
      currNode = currNode.right;
    }
  }

  return res;
}
