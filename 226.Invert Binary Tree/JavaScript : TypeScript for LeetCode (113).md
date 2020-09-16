# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第226题 )  翻转二叉树**](https://leetcode-cn.com/problems/invert-binary-tree/)
      



## 2、解题思路
```javascript
递归
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // 递归终止条件
  if (root === null) {
    return null;
  }

  let leftTree = invertTree(root.right);
  let rightTree = invertTree(root.left);

  root.left = leftTree;
  root.right = rightTree;

  return root;
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

function invertTree(root: TreeNode | null): TreeNode | null {
  // 递归终止条件
  if (root === null) {
    return null;
  }

  let leftTree: TreeNode | null = invertTree(root.right);
  let rightTree: TreeNode | null = invertTree(root.left);

  root.left = leftTree;
  root.right = rightTree;

  return root;
}
```

