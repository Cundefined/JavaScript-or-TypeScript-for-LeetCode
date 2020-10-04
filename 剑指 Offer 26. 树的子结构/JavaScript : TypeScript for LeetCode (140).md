# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 26 )  树的子结构**](https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/)
      


## 2、解题思路
**方法：递归**
```javascript
1、isSubStructure函数递归：
    三种情况：
        1.1、B树与A树【整体结构】完全相同 （此情况又分为三种情况讨论，交付给helper函数递归执行） 
        1.2、B树与A树的左子树结构相同 isSubStructure(A.left, B)
        1.2、B树与A树的右子树结构相同 isSubStructure(A.right, B)
    以上，只要有一种情况返回true，则B树是A树的子树
2、helper函数递归：
    三种情况：
        2.1、A树当前节点值，与B树当前节点值，相同
        2.1、A树当前节点的左子树，与B树当前节点的左子树，相同
        2.1、A树当前节点的右子树，与B树当前节点的右子树，相同
    以上，三种情况全都返回true，才能说明B树与A树【整体结构】完全相同
参考视频：https://www.bilibili.com/video/BV1WE411P7rc?t=189
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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  // 递归结束条件
  if (A === null || B === null) {
    return false;
  }
  return (
    helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
};

function helper(A, B) {
  // 递归结束条件
  if (B === null) {
    return true;
  }
  if (A === null) {
    return false;
  }

  return A.val === B.val && helper(A.left, B.left) && helper(A.right, B.right);
}

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

function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  // 递归结束条件
  if (A === null || B === null) {
    return false;
  }
  return (
    helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
}

function helper(A: TreeNode | null, B: TreeNode | null): boolean {
  // 递归结束条件
  if (B === null) {
    return true;
  }
  if (A === null) {
    return false;
  }

  return A.val === B.val && helper(A.left, B.left) && helper(A.right, B.right);
}

```

