# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第145题 )  二叉树的后序遍历**](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)
     


## 2、解题思路
**方法一、递归**
```javascript
方法一、递归
```
**方法二、迭代**
```javascript
注意：利用“栈”来实现递归的效果
1、创建栈和结果数组
2、创建两个指针：
  2.1、curr指针指向当前所在的节点，初始化指向根节点
  2.2、isVisited指针指向刚刚被加进结果数组的节点，避免重复访问，初始化指向空
3、当前节点存在且左孩子存在，则一直入栈，指针一直左移
4、curr移动到左叶子节点后，需要出栈，对栈内节点处理
  4.1、出栈，并让curr指针指向该节点（回退到上一节点）
  4.2、如果该节点的右子节点不存在或者该节点已经被访问过，就没必要再遍历了，加入结果数组，并把isVisited指向该节点
  4.3、否则，重新将该节点入栈，并且将curr指针指向其右子节点
  4.4、然后，重复3 
5、返回结果
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  if (root === null) {
    return res;
  }

  dfs(root, res);
  return res;
};

function dfs(root, res) {
  // 递归结束条件
  if (root === null) {
    return;
  }

  // 后序遍历
  dfs(root.left, res);
  dfs(root.right, res);
  res.push(root.val);
}
```

**方法二、迭代**
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 1、创建栈和结果数组
  const stack = [];
  const res = [];

  // 2、创建两个指针：
  //2.1、curr指针指向当前所在的节点，初始化指向根节点
  let curr = root;
  //2.2、isVisited指针指向刚刚被加进结果数组的节点，避免重复访问，初始化指向空
  let isVisited = null;

  // 3、当前节点存在且左孩子存在，则一直入栈，指针一直左移
  while (curr) {
    stack.push(curr);
    curr = curr.left;
  }

  // 4、curr移动到左叶子节点后，需要出栈，对栈内节点处理
  while (stack.length !== 0) {
    // 4.1、出栈，并让curr指针指向该节点（回退到上一节点）
    curr = stack.pop();
    // 4.2、如果该节点的右子节点不存在或者该节点已经被访问过，就没必要再遍历了，加入结果数组，并把isVisited指向该节点
    if (curr.right === null || curr.right === isVisited) {
      res.push(curr.val);
      isVisited = curr;
    } else {
      // 4.3、否则，重新将该节点入栈，并且将curr指针指向其右子节点
      stack.push(curr);
      curr = curr.right;
      // 4.4、然后，重复3
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }
    }
  }

  // 5、返回结果
  return res;
};
```

