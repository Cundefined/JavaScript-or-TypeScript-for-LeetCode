# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第110题 )  平衡二叉树**
       


给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。


 **示例 1:**
给定二叉树 [3,9,20,null,null,15,7]
```javascript
 3
   / \
  9  20
    /  \
   15   7
```
**示例 2:**

给定二叉树 [1,2,2,3,3,null,null,4,4]

```java
 	   1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/balanced-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
```javascript
1、定义计算树高度的函数，传入当前节点，返回当前节点子树的高度：
    1.1、如果当前节点为空，则高度为0
    1.2、递归计算当前节点的左子树、右子树高度
    1.3、计算当前节点的高度，并返回结果
2、边界条件预判，如果当前根节点为空，返回true
3、计算当前根节点的左右子树的高度
4、如果当前根节点的左右子树高度差大于1，就返回false
5、否则，继续判断左右子节点的子树，只有全部返回true才返回true
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
var isBalanced = function (root) {
  // 1、定义计算树高度的函数，传入当前节点，返回当前节点子树的高度：
  function calculateTreeHeight(currNode) {
    // 1.1、如果当前节点为空，则高度为0
    if (currNode === null) {
      return 0;
    }

    // 1.2、递归计算当前节点的左子树、右子树高度
    let leftNodeHeight = calculateTreeHeight(currNode.left);
    let rightNodeHeight = calculateTreeHeight(currNode.right);

    // 1.3、计算当前节点的高度
    let currNodeHeight = Math.max(leftNodeHeight, rightNodeHeight) + 1;
    return currNodeHeight;
  }

  // 2、边界条件预判，如果当前根节点为空，返回true
  if (root === null) {
    return true;
  }

  // 3、计算当前根节点的左右子树的高度
  let leftNodeHeight = calculateTreeHeight(root.left);
  let rightNodeHeight = calculateTreeHeight(root.right);

  // 4、如果当前根节点的左右子树高度差大于1，就返回false
  if (Math.abs(leftNodeHeight - rightNodeHeight) > 1) {
    return false;
  }

  // 5、否则，继续判断左右子节点的子树，只有全部返回true才返回true
  return isBalanced(root.left) && isBalanced(root.right);
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

function isBalanced(root: TreeNode | null): boolean {
  function calculateTreeHeight(currNode: TreeNode | null): number {
    if (currNode === null) {
      return 0;
    }

    let leftNodeHeight: number = calculateTreeHeight(currNode.left);
    let rightNodeHeight: number = calculateTreeHeight(currNode.right);

    let currNodeHeight: number = Math.max(leftNodeHeight, rightNodeHeight) + 1;
    return currNodeHeight;
  }

  if (root === null) {
    return true;
  }

  let leftNodeHeight: number = calculateTreeHeight(root.left);
  let rightNodeHeight: number = calculateTreeHeight(root.right);

  if (Math.abs(leftNodeHeight - rightNodeHeight) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}
```
### 2.3、Java Solution
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }
        if (calculateTreeHeight(root) == -1) {
            return false;
        }

        return true;

    }

    private int calculateTreeHeight(TreeNode currTreeNode) {
        if (currTreeNode == null) {
            return 0;
        }

        int leftNodeHeight = calculateTreeHeight(currTreeNode.left);
        int rightNodeHeight = calculateTreeHeight(currTreeNode.right);

        if (leftNodeHeight == -1 || rightNodeHeight == -1) {
            return -1;
        }

        if (Math.abs(leftNodeHeight - rightNodeHeight) > 1) {
            return -1;
        } 

        return Math.max(leftNodeHeight, rightNodeHeight) + 1;
    }
}
```

