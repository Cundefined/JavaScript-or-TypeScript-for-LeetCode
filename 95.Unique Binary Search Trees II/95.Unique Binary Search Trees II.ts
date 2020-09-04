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

function generateTrees(n: number): Array<TreeNode | null> {
  function generate(start: number, end: number): Array<TreeNode | null> {
    const res: Array<TreeNode | null> = [];

    if (start > end) {
      res.push(null);
      return res;
    }

    for (let root: number = start; root <= end; root++) {
      let leftSubTree: Array<TreeNode | null> = generate(start, root - 1);
      let rightSubTree: Array<TreeNode | null> = generate(root + 1, end);

      for (const l of leftSubTree) {
        for (const r of rightSubTree) {
          let currNode: TreeNode = new TreeNode(root);
          currNode.left = l;
          currNode.right = r;

          res.push(currNode);
        }
      }
    }

    return res;
  }

  if (n === 0) {
    return [];
  }

  return generate(1, n);
}
