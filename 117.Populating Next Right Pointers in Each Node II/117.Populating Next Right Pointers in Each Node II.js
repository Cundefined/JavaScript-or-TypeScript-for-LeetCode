/*
解题思路：广度优先搜索
注意：BFS需要维持一个队列！
1、边界条件预判
2、创建队列，存储同一层的所有节点
3、先把根节点入队
4、队列不为空的话，说明还没遍历完树，继续while循环
`   4.1、获取当前队列的长度，用于遍历队列`
    4.2、遍历每一层节点之前，需要初始化一个链表指针，用于连接同层节点
    4.3、开始遍历当前层的所有节点，for循环遍历队列中的节点
5、返回树
*/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  //1、边界条件预判
  if (root === null) {
    return null;
  }

  //2、创建队列，存储同一层的所有节点
  const queue = [];

  //3、先把根节点入队
  queue.push(root);

  //4、队列不为空的话，说明还没遍历完树，继续while循环
  while (queue.length !== 0) {
    //4.1、获取当前队列的长度，用于遍历队列
    let queueLength = queue.length;
    //4.2、遍历每一层节点之前，需要初始化一个链表指针，用于连接同层节点
    let pointer = null;

    // 4.3、开始遍历当前层的所有节点，for循环遍历队列中的节点
    for (let i = 0; i < queueLength; i++) {
      // 队头的节点出队，用于后续处理
      let currNode = queue.shift();
      // 将当前节点的孩子节点入队（下一层）
      currNode.left && queue.push(currNode.left);
      currNode.right && queue.push(currNode.right);

      // 处理取出来的当前节点，连接同层节点
      if (i !== 0) {
        pointer.next = currNode;
      }
      pointer = currNode;
    }
  }
  //5、返回树
  return root;
};
