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

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const treeNodeList: number[] = [];

  function inorderTraverse(currNode: TreeNode | null): void {
    if (currNode === null) {
      return;
    }

    inorderTraverse(currNode.left);

    treeNodeList.push(currNode.val);

    inorderTraverse(currNode.right);
  }

  inorderTraverse(root);

  for (let i: number = 0; i < treeNodeList.length; i++) {
    if (treeNodeList[i] >= treeNodeList[i + 1]) {
      return false;
    }
  }

  return true;
}
