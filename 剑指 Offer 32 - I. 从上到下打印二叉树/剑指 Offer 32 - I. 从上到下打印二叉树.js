/*
解题思路：广度优先搜索
注意：维护一个队列！！
标准的BFS模板
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  const res = [];
  if (root === null) {
    return res;
  }

  //创建队列
  const queue = [];

  queue.push(root);

  //逐层遍历树
  while (queue.length !== 0) {
    //遍历当前层的所有节点
    for (let i = 0; i < queue.length; i++) {
      //出队，拿出待处理的节点
      let currNode = queue.shift();
      //把当前节点加入结果
      res.push(currNode.val);
      //当前节点的所有子节点（下一层节点）全部入队
      currNode.left && queue.push(currNode.left);
      currNode.right && queue.push(currNode.right);
    }
  }

  return res;
};
