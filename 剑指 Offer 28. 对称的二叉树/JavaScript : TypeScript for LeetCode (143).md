# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 28 )  对称的二叉树**](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)
      


## 2、解题思路
**方法：递归**
```javascript
两个子树是否镜像对称的条件：
    1、子树1当前节点值，与子树2当前节点值，相同
    2、子树1当前节点的【左】子树，与子树2前节点的【右】子树，相同
    3、子树1当前节点的【右】子树，与子树2前节点的【左】子树，相同
以上，三种情况全都返回true，才能说明两个子树是否镜像对称
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
var isSymmetric = function (root) {
  //边界条件
  if (root === null) {
    return true;
  }

  //调用递归函数
  return helper(root.left, root.right);
};

//创建递归函数，判断两个子树是否镜像对称
function helper(subTree1, subTree2) {
  // 递归终止条件
  if (subTree1 === null && subTree2 === null) {
    return true;
  }
  //两个子树，有一个为空的话，肯定不对称了
  if (subTree1 === null || subTree2 === null) {
    return false;
  }

  //两个子树是否镜像对称的三个条件
  return (
    subTree1.val === subTree2.val &&
    helper(subTree1.left, subTree2.right) &&
    helper(subTree1.right, subTree2.left)
  );
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

function isSymmetric(root: TreeNode | null): boolean {
  //边界条件
  if (root === null) {
    return true;
  }

  //调用递归函数
  return helper(root.left, root.right);
}

//创建递归函数，判断两个子树是否镜像对称
function helper(subTree1: TreeNode | null, subTree2: TreeNode | null): boolean {
  // 递归终止条件
  if (subTree1 === null && subTree2 === null) {
    return true;
  }
  //两个子树，有一个为空的话，肯定不对称了
  if (subTree1 === null || subTree2 === null) {
    return false;
  }

  //两个子树是否镜像对称的三个条件
  return (
    subTree1.val === subTree2.val &&
    helper(subTree1.left, subTree2.right) &&
    helper(subTree1.right, subTree2.left)
  );
}
```

