# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第637题 )  二叉树的层平均值**](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/)
       




## 2、解题思路
**方法：广度优先搜索**
```javascript
类似102.Binary Tree Level Order Traversal
1、初始时，将根节点加入队列
2、每一轮遍历时，将队列中的节点全部取出，计算这些节点的数量以及它们的节点值之和，
   并计算这些节点的平均值，然后将这些节点的全部非空子节点加入队列，重复上述操作，
   直到队列为空，遍历结束
注意：保证每次可以遍历到的节点为同一层的所有节点
     在每一轮遍历之前获得队列中的节点数量queueLength，遍历时只遍历queueLength个节点，
     即可满足每一轮遍历的是同一层的全部节点
```


### 2.1、JavaScript Solution

```javascript
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
var averageOfLevels = function (root) {
  const res = [];

  const queue = [];
  queue.push(root);

  //遍历所有层
  while (queue.length !== 0) {
    let sum = 0;
    // 在每一轮遍历之前获得队列中的节点数量queueLength
    // queueLength是当前层的所有节点数量
    let queueLength = queue.length;

    // 遍历当前层所有节点
    for (let i = 0; i < queueLength; i++) {
      // 弹出队头节点
      let currNode = queue.shift();
      //把弹出的节点值计入sum
      sum += currNode.val;

      // 当前节点的左右子节点存在的话，就加入队列
      currNode.left && queue.push(currNode.left);
      currNode.right && queue.push(currNode.right);
    }

    // 遍历完当前层所有节点后，计算平均值
    res.push(sum / queueLength);
  }

  return res;
};
```

