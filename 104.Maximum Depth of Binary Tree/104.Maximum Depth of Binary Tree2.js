/*
解题思路：方法二：BFS-广度优先搜索（每遍历一行，就把深度加一）
1、边界条件预判：
  1.1、若根节点不存在，则返回深度为0
  1.2、若只有根节点一个节点，则返回深度为1
2、创建一个队列（js用数组来模拟），存放一行节点，并且在队尾补加null来标识该行已被遍历完（遍历发现null时，说明已经遍历完一行了）
3、创建两个变量，queueFirstElement记录移除的队头元素，用于循环判断，maxTreeDepth记录数深度
4、while循环，当队列中元素还没移除完时，遍历判断该队列元素：
  4.1、当移除的元素为null时，说明已经遍历了一行节点，此时如果队列为空，说明后续没有子节点了，返回maxTreeDepth
  4.2、否则，maxTreeDepth加一，并且往队尾补加null标志下一行
  4.3、若当前行还没遍历完，并且左右子节点存在的话，就把左右子节点加入队列

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
 * @return {number}
 */
var maxDepth = function (root) {
  // 1、边界条件预判：
  // 1.1、若根节点不存在，则返回深度为0
  if (root === null) {
    return 0;
  }

  // 1.2、若只有根节点一个节点，则返回深度为1
  if (root.left === null && root.right === null) {
    return 1;
  }

  // 2、创建一个队列（js用数组来模拟），存放一行节点，并且在队尾补加null来标识该行已被遍历完（遍历发现null时，说明已经遍历完一行了）
  const queue = [root, null];

  // 3、创建两个变量，queueFirstElement记录移除的队头元素，用于循环判断，maxTreeDepth记录数深度
  let queueFirstElement;
  let maxTreeDepth = 1;

  // 4、while循环，当队列中元素还没移除完时，遍历判断该队列元素：
  while ((queueFirstElement = queue.shift()) !== undefined) {
    // 4.1、当移除的元素为null时，说明已经遍历了一行节点，此时如果队列为空，说明后续没有子节点了，返回maxTreeDepth
    if (queueFirstElement === null) {
      if (queue.length === 0) {
        return maxTreeDepth;
      }
      // 4.2、否则，maxTreeDepth加一，并且往队尾补加null标志下一行
      maxTreeDepth++;
      queue.push(null);
      continue;
    }

    // 4.3、若当前行还没遍历完，并且左右子节点存在的话，就把左右子节点加入队列
    if (queueFirstElement.left !== null) {
      queue.push(queueFirstElement.left);
    }

    if (queueFirstElement.right !== null) {
      queue.push(queueFirstElement.right);
    }
  }
};
