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
  const res: number[][] = new Array<number[]>();
  const path: number[] = [];
  dfs(root, sum, res, path);
  return res;
}

function dfs(
  root: TreeNode | null,
  sum: number,
  res: number[][],
  path: number[]
): void {
  if (root === null) {
    return;
  }

  path.push(root.val);

  sum = sum - root.val;

  if (root.left === null && root.right === null && sum === 0) {
    res.push([...path]);
  }

  dfs(root.left, sum, res, path);
  dfs(root.right, sum, res, path);

  path.pop();
}
