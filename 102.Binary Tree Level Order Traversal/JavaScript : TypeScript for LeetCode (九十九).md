# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第102题 ) 二叉树的层序遍历**](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
       




## 2、解题思路
**方法：广度优先搜索**
```javascript
广度优先搜索 -- 元素存入“队列”
深度优先搜索 -- 元素存入“栈”或递归实现
1、先自上而下一层一层深度优先搜索，把每层的节点保存进二维数组
2、返回该二维结果数组
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  // 边界条件预判
  if (root === null) {
    return res;
  }

  //创建一个队列(数组模拟)，来临时存储每一层的顶点
  //   （注意：此队列永远只保存同一层的节点，每访问完一个节点，就要及时把它出队）
  //遍历完所有树节点的时，此时的队列也会被清空，所以只需要while循环，队列的长度不为0就一直遍历树节点
  let queue = [];
  //初始化在第一层，把第一层节点入队
  queue.push(root);

  //层级，用来决定队列中的结果保存在哪一层
  let level = 0;
  while (queue.length !== 0) {
    //  预先添加一个空数组，准备保存每一层的结果
    res.push([]);
    // 【访问完】：意味着当前节点以及它的左右子节点都被加入当队列了
    // 开始访问第当前层（已经存到队列中了）节点
    for (let i = queue.length - 1; i >= 0; i--) {
      // 先弹出队头节点
      let currNode = queue.shift();
      // 把弹出的节点加入到结果数组
      res[level].push(currNode.val);
      // 把当前层节点的左右子节点加入队列，待之后访问
      currNode.left !== null && queue.push(currNode.left);
      currNode.right !== null && queue.push(currNode.right);
    }

    // 更新层级
    level++;
  }

  return res;
};
```


