# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第98题 )  验证二叉搜索树**](https://leetcode-cn.com/problems/validate-binary-search-tree/)
       


## 2、解题思路
**方法：中序遍历**
```javascript
基本思路：
中序遍历访问二叉搜索树可以按从小到大的顺序输出节点值，如果用数组存储的话，因此只要发现任意相邻的两个元素不是左小右大的话，说明不是二叉搜索树，反之则是。
1、边界条件预判，空树也是二叉搜索树
2、定义中序遍历函数
3、从根节点开始中序遍历
4、遍历生成的节点列表：
    4.1、一旦发现非正序的话，直接返回false
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 1、边界条件预判，空树也是二叉搜索树
  if (root === null) {
    return true;
  }

  const treeNodeList = [];

  // 2、定义中序遍历函数
  function inorderTraverse(currNode) {
    // 递归结束条件
    if (currNode === null) {
      return;
    }
    // 先遍历当前节点的左子树
    inorderTraverse(currNode.left);
    // 左子树到末端后，记录该节点的值
    treeNodeList.push(currNode.val);
    // 左子树到末端没有右节点，执行这一句后，该节点的操作就结束了，会弹栈接着treeNodeList.push(currNode.val)再往下执行
    inorderTraverse(currNode.right);
  }

  // 3、从根节点开始中序遍历
  inorderTraverse(root);

  // 4、遍历生成的节点列表：
  for (let i = 0; i < treeNodeList.length; i++) {
    // 4.1、一旦发现非正序的话，直接返回false
    if (treeNodeList[i] >= treeNodeList[i + 1]) {
      return false;
    }
  }

  return true;
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

function isValidBST(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const treeNodeList: number[] = [];

  function inorderTraverse(currNode: TreeNode | null): void {
    if (currNode === null) {
      return;
    }

    inorderTraverse(currNode.left);

    treeNodeList.push(currNode.val);

    inorderTraverse(currNode.right);
  }

  inorderTraverse(root);

  for (let i: number = 0; i < treeNodeList.length; i++) {
    if (treeNodeList[i] >= treeNodeList[i + 1]) {
      return false;
    }
  }

  return true;
}
```

