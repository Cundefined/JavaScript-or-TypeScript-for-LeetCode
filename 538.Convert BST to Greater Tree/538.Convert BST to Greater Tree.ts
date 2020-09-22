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

function convertBST(root: TreeNode | null): TreeNode | null {
  let prevNodeSum: number = 0;
  reverseInOrder(root);
  //返回修改后的根节点
  return root;

  function reverseInOrder(root: TreeNode | null): void {
    // 递归结束条件
    if (root === null) {
      return;
    }
    // 标准中序遍历模板(只不过先遍历有子树，最后遍历左子树)
    reverseInOrder(root.right);
    //把当前节点值加上它之前的节点值总和，更新当前节点值
    root.val = root.val + prevNodeSum;
    //更新prevNodeSum
    prevNodeSum = root.val;
    reverseInOrder(root.left);
  }
}
