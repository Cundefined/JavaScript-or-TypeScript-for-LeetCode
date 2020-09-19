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

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum: number = 0;
  dfs(root);
  return sum;

  //创建递归函数
  function dfs(currNode: TreeNode | null): void {
    // 递归结束条件
    if (currNode === null) {
      return;
    }

    //如果当前节点的左子节点是叶子节点，则计入求和
    if (
      currNode.left !== null &&
      currNode.left.left === null &&
      currNode.left.right === null
    ) {
      sum += currNode.left.val;
    }

    //否则，继续递归遍历左右子节点
    dfs(currNode.left);
    dfs(currNode.right);
  }
}
