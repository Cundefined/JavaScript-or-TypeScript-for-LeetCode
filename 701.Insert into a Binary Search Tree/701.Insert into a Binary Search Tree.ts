/*
解题思路：方法二、迭代
*/
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  let currNode: TreeNode | null = root;
  while (currNode !== null) {
    if (val < currNode.val) {
      // 若到达左子树末端，插入该节点
      if (currNode.left === null) {
        currNode.left = new TreeNode(val);
        return root;
      } else {
        //一直往左子树末端移动
        currNode = currNode.left;
      }
    } else {
      // 若到达右子树末端，插入该节点
      if (currNode.right === null) {
        currNode.right = new TreeNode(val);
        return root;
      } else {
        //一直往右子树末端移动
        currNode = currNode.right;
      }
    }
  }

  return new TreeNode(val);
}
