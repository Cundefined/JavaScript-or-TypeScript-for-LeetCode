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

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = new Array<number[]>();
  if (root === null) {
    return res;
  }

  //创建队列
  const queue: Array<TreeNode | null> = new Array<TreeNode | null>();

  queue.push(root);

  //逐层遍历树
  while (queue.length !== 0) {
    let temp: number[] = new Array<number>();
    //遍历当前层的所有节点
    for (let i: number = queue.length; i > 0; i--) {
      //出队，拿出待处理的节点
      let currNode: TreeNode | null | undefined = queue.shift();
      //把当前节点加入结果

      // 2.1、如果是奇数层，将当前节点都从temp数组尾部添加，即temp.push(currNode.val)
      if (((res.length + 1) & 1) !== 0) {
        currNode && temp.push(currNode.val);
      } else {
        // 2.2、如果是偶数层，将当前节点都从temp数组头部添加，即temp.unshift(currNode.val)
        currNode && temp.unshift(currNode.val);
      }
      //当前节点的所有子节点（下一层节点）全部入队
      currNode && currNode.left && queue.push(currNode.left);
      currNode && currNode.right && queue.push(currNode.right);
    }

    res.push([...temp]);
  }

  return res;
}
