# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第701题 )  二叉搜索树中的插入操作**](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/)
       



## 2、解题思路
**方法一、递归**
```javascript
1、若 root == null，则返回 TreeNode(val)
2、若 val > root.val，插入到右子树root.right
3、若 val < root.val，插入到左子树root.left
4、插入结束后，返回 root
```
**方法二、迭代**

```javascript
见2.2、TypeScript Solution
```

### 2.1、JavaScript Solution
**方法一、递归**
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  // 1、若 root == null，则返回 TreeNode(val)
  if (root === null) {
    return new TreeNode(val);
  }

  //   2、若 val > root.val，插入到右子树root.right
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }

  // 3、若 val < root.val，插入到左子树root.left
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }

  // 4、插入结束后，返回 root
  return root;
};

```

### 2.2、TypeScript Solution
**方法二、迭代**
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  let currNode: TreeNode | null = root;
  while (currNode !== null) {
    if (val < currNode.val) {
      // 若到达左子树末端，插入该节点
      if (currNode.left === null) {
        currNode.left = new TreeNode(val);
        return root;
      } else {
        //一直往左子树末端移动
        currNode = currNode.left;
      }
    } else {
      // 若到达右子树末端，插入该节点
      if (currNode.right === null) {
        currNode.right = new TreeNode(val);
        return root;
      } else {
        //一直往右子树末端移动
        currNode = currNode.right;
      }
    }
  }

  return new TreeNode(val);
}
```

