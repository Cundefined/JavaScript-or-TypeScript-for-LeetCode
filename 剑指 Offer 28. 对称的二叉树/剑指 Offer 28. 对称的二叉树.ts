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

function isSymmetric(root: TreeNode | null): boolean {
  //边界条件
  if (root === null) {
    return true;
  }

  //调用递归函数
  return helper(root.left, root.right);
}

//创建递归函数，判断两个子树是否镜像对称
function helper(subTree1: TreeNode | null, subTree2: TreeNode | null): boolean {
  // 递归终止条件
  if (subTree1 === null && subTree2 === null) {
    return true;
  }
  //两个子树，有一个为空的话，肯定不对称了
  if (subTree1 === null || subTree2 === null) {
    return false;
  }

  //两个子树是否镜像对称的三个条件
  return (
    subTree1.val === subTree2.val &&
    helper(subTree1.left, subTree2.right) &&
    helper(subTree1.right, subTree2.left)
  );
}
