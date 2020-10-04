# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 27 )  二叉树的镜像**](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)
      


## 2、解题思路
**方法：递归
```javascript
递归:
1、递归结束条件
2、递归获取左右子树
3、获得的左右子树，重新连接到当前根节点
4、返回根节点
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
var mirrorTree = function (root) {
  // 递归结束条件
  if (root === null) {
    return null;
  }

  //递归获取左右子树
  let leftSubTree = mirrorTree(root.right);
  let rightSubTree = mirrorTree(root.left);

  //获得的左右子树，重新连接到当前根节点
  root.left = leftSubTree;
  root.right = rightSubTree;

  //返回根节点
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

function mirrorTree(root: TreeNode | null): TreeNode | null {
  // 递归结束条件
  if (root === null) {
    return null;
  }

  //递归获取左右子树
  let leftSubTree: TreeNode | null = mirrorTree(root.right);
  let rightSubTree: TreeNode | null = mirrorTree(root.left);

  //获得的左右子树，重新连接到当前根节点
  root.left = leftSubTree;
  root.right = rightSubTree;

  return root;
}

```

