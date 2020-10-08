/*
解题思路：层序遍历+双端队列
维护一个队列！！标准的BFS模板
注意：
    1、每一层需要装入临时数组中，再加入结果数组
    2、利用res.length结果数组的长度，可判断当前遍历的层是奇数层还是偶数层
        2.1、如果是奇数层，将当前节点都从temp数组尾部添加，即temp.push(currNode.val)
        2.2、如果是偶数层，将当前节点都从temp数组头部添加，即temp.unshift(currNode.val)
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
 * @return {number[][]}
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
    //创建临时数组，初始化为空
    let temp = [];
    //遍历【当前层】的所有节点
    for (let i = queue.length; i > 0; i--) {
      //出队，拿出待处理的节点
      let currNode = queue.shift();
      //把当前节点加入结果
      // 2.1、如果是奇数层，将当前节点都从temp数组尾部添加，即temp.push(currNode.val)
      if (((res.length + 1) & 1) !== 0) {
        temp.push(currNode.val);
      } else {
        // 2.2、如果是偶数层，将当前节点都从temp数组头部添加，即temp.unshift(currNode.val)
        temp.unshift(currNode.val);
      }

      //当前节点的所有子节点（下一层节点）全部入队
      currNode.left && queue.push(currNode.left);
      currNode.right && queue.push(currNode.right);
    }

    //遍历完一层后，加临时数组加入结果数组，深拷贝
    res.push([...temp]);
  }

  return res;
};
