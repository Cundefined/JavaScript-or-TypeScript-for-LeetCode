# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode -- 第116题 )  填充每个节点的下一个右侧节点指针**](https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/)
      


## 2、解题思路
**方法：广度优先搜索**
```javascript
注意：BFS需要维持一个队列！
1、边界条件预判
2、创建队列，存储同一层的所有节点
3、先把根节点入队
4、队列不为空的话，说明还没遍历完树，继续while循环
`   4.1、获取当前队列的长度，用于遍历队列`
    4.2、遍历每一层节点之前，需要初始化一个链表指针，用于连接同层节点
    4.3、开始遍历当前层的所有节点，for循环遍历队列中的节点
5、返回树
```


### 2.1、JavaScript Solution

```javascript
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
  if (root === null) {
    return root;
  }

  const queue = [];

  queue.push(root);

  //依次遍历所有层
  while (queue.length !== 0) {
    let len = queue.length;
    //占住当前层的当前节点的前一节点
    let pointer = null;
    //遍历当前层
    for (let i = 0; i < len; i++) {
      let currNode = queue.shift();
      if (i !== 0) {
        pointer.next = currNode;
      }
      pointer = currNode;

      currNode.left && queue.push(currNode.left);
      currNode.right && queue.push(currNode.right);
    }
  }

  return root;
};
```


