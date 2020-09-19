# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第404题 )  左叶子之和**](https://leetcode-cn.com/problems/sum-of-left-leaves/)
      


## 2、解题思路
```javascript
深度优先搜索
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  dfs(root);
  return sum;

  //创建递归函数
  function dfs(currNode) {
    // 递归结束条件
    if (currNode === null) {
      return;
    }

    //如果当前节点的左子节点是叶子节点，则计入求和
    if (
      currNode.left !== null &&
      currNode.left.left === null &&
      currNode.left.right === null
    ) {
      sum += currNode.left.val;
    }

    //否则，继续递归遍历左右子节点
    dfs(currNode.left);
    dfs(currNode.right);
  }
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

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum: number = 0;
  dfs(root);
  return sum;

  //创建递归函数
  function dfs(currNode: TreeNode | null): void {
    // 递归结束条件
    if (currNode === null) {
      return;
    }

    //如果当前节点的左子节点是叶子节点，则计入求和
    if (
      currNode.left !== null &&
      currNode.left.left === null &&
      currNode.left.right === null
    ) {
      sum += currNode.left.val;
    }

    //否则，继续递归遍历左右子节点
    dfs(currNode.left);
    dfs(currNode.right);
  }
}
```

