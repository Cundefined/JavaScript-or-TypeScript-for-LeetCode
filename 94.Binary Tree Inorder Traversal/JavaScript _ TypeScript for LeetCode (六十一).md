# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第94题 )  二叉树的中序遍历**
       给定一个二叉树，返回它的中序 遍历。

 **示例 :**

```java
输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```
**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
**方法一：递归**
```javascript
1、定义递归函数，传入当前节点和结果数组：
    1.1、如果当前节点为空，退出递归
    1.2、递归访问当前节点的左节点
    1.3、记录到当前到达的节点值，放入结果数组中
    1.4、递归访问当前节点的右节点
2、创建结果数组
3、调用递归函数
4、返回结果数组
```
**方法二：栈**
```javascript
1、创建栈和结果数组
2、创建变量，保存当前节点，初始化为根节点
3、while循环，当当前节点不为空，或者栈不为空时，循环：
  3.1、如果当前节点不为空，则把当前节点先入栈保存，并且节点移动到其左节点
  3.2、否则，到达null节点，则弹出之前保存的有效节点，并保存到结果数组，继续移动到其右节点
4、循环结束，返回结果数组
```

### 2.1、JavaScript Solution
**方法一：递归**
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
var inorderTraversal = function (root) {
  // 1、定义递归函数，传入当前节点和结果数组：
  function inOrderSearch(currNode, res) {
    // 1.1、如果当前节点为空，退出递归
    if (currNode === null) {
      return;
    }

    // 1.2、递归访问当前节点的左节点
    inOrderSearch(currNode.left, res);

    // 1.3、记录到当前到达的节点值，放入结果数组中
    res.push(currNode.val);

    // 1.4、递归访问当前节点的右节点
    inOrderSearch(currNode.right, res);
  }

  // 2、创建结果数组
  let res = [];

  // 3、调用递归函数
  inOrderSearch(root, res);

  // 4、返回结果数组
  return res;
};

```
**方法二：栈**

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
var inorderTraversal = function (root) {
  // 1、创建栈和结果数组
  let stack = [];
  let res = [];

  // 2、创建变量，保存当前节点，初始化为根节点
  let currNode = root;

  // 3、while循环，当当前节点不为空，或者栈不为空时，循环：
  while (currNode !== null || stack.length !== 0) {
    // 3.1、如果当前节点不为空，则把当前节点先入栈保存，并且节点移动到其左节点
    if (currNode !== null) {
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      // 3.2、否则，到达null节点，则弹出之前保存的有效节点，并保存到结果数组，继续移动到其右节点
      currNode = stack.pop();
      res.push(currNode.val);
      currNode = currNode.right;
    }
  }

  // 4、循环结束，返回结果数组
  return res;
};
```

### 2.2、TypeScript Solution
**方法一：递归**

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

function inorderTraversal(root: TreeNode | null): number[] {
  function inOrderSearch(currNode: TreeNode | null, res: number[]) {
    if (currNode === null) {
      return;
    }

    inOrderSearch(currNode.left, res);

    res.push(currNode.val);

    inOrderSearch(currNode.right, res);
  }

  let res: number[] = [];

  inOrderSearch(root, res);

  return res;
}
```

**方法二：栈**
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

function inorderTraversal(root: TreeNode | null): number[] {
  let stack: Array<TreeNode | null> = [];
  let res: number[] = [];

  let currNode: TreeNode | null = root;

  while (currNode !== null || stack.length !== 0) {
    if (currNode !== null) {
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      currNode = stack.pop();
      res.push(currNode.val);
      currNode = currNode.right;
    }
  }

  return res;
}
```

