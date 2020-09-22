# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第538题 )  把二叉搜索树转换为累加树**](https://leetcode-cn.com/problems/convert-bst-to-greater-tree/)
       


## 2、解题思路
**方法：反序中序遍历**
```javascript
1、中序遍历可以得到二叉搜索树的节点值升序排列
2、反序过来的话，可以得到节点值降序排列
3、记录当前节点值之前的节点值总和，加上自己的节点值，就可实时更新自己的节点值为累加值
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
var convertBST = function (root) {
  let prevNodeSum = 0;
  reverseInOrder(root);
  //返回修改后的根节点
  return root;

  function reverseInOrder(root) {
    // 递归结束条件
    if (root === null) {
      return root;
    }
    // 标准中序遍历模板(只不过先遍历有子树，最后遍历左子树)
    reverseInOrder(root.right);
    //把当前节点值加上它之前的节点值总和，更新当前节点值
    root.val = root.val + prevNodeSum;
    //更新prevNodeSum
    prevNodeSum = root.val;
    reverseInOrder(root.left);
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

function convertBST(root: TreeNode | null): TreeNode | null {
  let prevNodeSum: number = 0;
  reverseInOrder(root);
  //返回修改后的根节点
  return root;

  function reverseInOrder(root: TreeNode | null): void {
    // 递归结束条件
    if (root === null) {
      return;
    }
    // 标准中序遍历模板(只不过先遍历有子树，最后遍历左子树)
    reverseInOrder(root.right);
    //把当前节点值加上它之前的节点值总和，更新当前节点值
    root.val = root.val + prevNodeSum;
    //更新prevNodeSum
    prevNodeSum = root.val;
    reverseInOrder(root.left);
  }
}
```

