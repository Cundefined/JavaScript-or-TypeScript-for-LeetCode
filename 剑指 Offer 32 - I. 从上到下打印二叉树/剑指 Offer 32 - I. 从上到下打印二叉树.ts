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

function levelOrder(root: TreeNode | null): number[] {
  const res: number[] = new Array<number>();
  if (root === null) {
    return res;
  }

  //创建队列
  const queue: Array<TreeNode | null> = new Array<TreeNode | null>();

  queue.push(root);

  //逐层遍历树
  while (queue.length !== 0) {
    //遍历当前层的所有节点
    for (let i: number = 0; i < queue.length; i++) {
      //出队，拿出待处理的节点
      let currNode = queue.shift();
      //把当前节点加入结果
      currNode && res.push(currNode.val);
      //当前节点的所有子节点（下一层节点）全部入队
      currNode && currNode.left && queue.push(currNode.left);
      currNode && currNode.right && queue.push(currNode.right);
    }
  }

  return res;
}
