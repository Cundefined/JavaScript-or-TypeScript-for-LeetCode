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

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return 1;
  }


  const queue: Array<TreeNode | null | undefined> = [root, null];


  let queueFirstElement: TreeNode | null | undefined;
  let maxTreeDepth: number = 1;


  while ((queueFirstElement = queue.shift()) !== undefined) {

    if (queueFirstElement === null) {
      if (queue.length === 0) {
        return maxTreeDepth;
      }

      maxTreeDepth++;
      queue.push(null);
      continue;
    }


    if (queueFirstElement.left !== null) {
      queue.push(queueFirstElement.left);
    }

    if (queueFirstElement.right !== null) {
      queue.push(queueFirstElement.right);
    }
  }
}
