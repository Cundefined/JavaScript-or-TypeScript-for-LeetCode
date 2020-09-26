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

function pathSum(root: TreeNode | null, sum: number): number[][] {
  const res: number[][] = [];

  dfs(root, sum, []);
  return res;

  function dfs(root: TreeNode | null, sum: number, path: number[]): void {
    // 1、递归结束条件
    if (root === null) {
      return;
    }
    // 2、将当前非空节点加入路径
    path.push(root.val);
    // 3、将当前节点值从目标sum中减去
    sum = sum - root.val;
    // 4、碰到叶子节点 就把path加入结果
    if (root.left === null && root.right === null && sum === 0) {
      res.push([...path]);
    }

    // 5、递归遍历左子树
    dfs(root.left, sum, path);

    // 6、递归遍历右子树
    dfs(root.right, sum, path);

    // 7、回溯
    path.pop();
  }
}
