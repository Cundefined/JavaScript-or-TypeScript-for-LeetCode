# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 32 - I )  从上到下打印二叉树**](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)
      


## 2、解题思路
**方法：广度优先搜索**
```javascript
注意：维护一个队列！！
标准的BFS模板
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

```

### 2.2、TypeScript Solution

```javascript
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

```

