# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第95题 )  不同的二叉搜索树 II**](https://leetcode-cn.com/problems/unique-binary-search-trees-ii/)
       




## 2、解题思路
**方法：递归**
```javascript
二叉搜索树特点：
1、空树也是二叉搜索树
2、左子树所有节点值 < 当前节点值 < 右子树所有节点值
```


### 2.1、JavaScript Solution

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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  // 创建递归函数，用于生成二叉搜索树
  function generate(start, end) {
    const res = [];
    // 递归结束条件
    if (start > end) {
      res.push(null);
      return res;
    }
    // start到end，依次选择数字作为根结点，
    for (let root = start; root <= end; root++) {
      // 生成当前根节点的左右子树列表（数组）
      let leftSubTree = generate(start, root - 1);
      let rightSubTree = generate(root + 1, end);

      // 全排列
      // 左子树可能的排列数 * 右子树可能的排列数 = 完整树的可能排列数
      for (const l of leftSubTree) {
        // 固定左子树，遍历右子树
        for (const r of rightSubTree) {
          // 开始生成节点
          let currNode = new TreeNode(root);
          currNode.left = l;
          currNode.right = r;
          // 生成一个节点，就保存一个
          res.push(currNode);
        }
      }
    }

    return res;
  }

  if (n === 0) {
    return [];
  }

  return generate(1, n);
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

function generateTrees(n: number): Array<TreeNode | null> {
  function generate(start: number, end: number): Array<TreeNode | null> {
    const res: Array<TreeNode | null> = [];

    if (start > end) {
      res.push(null);
      return res;
    }

    for (let root: number = start; root <= end; root++) {
      let leftSubTree: Array<TreeNode | null> = generate(start, root - 1);
      let rightSubTree: Array<TreeNode | null> = generate(root + 1, end);

      for (const l of leftSubTree) {
        for (const r of rightSubTree) {
          let currNode: TreeNode = new TreeNode(root);
          currNode.left = l;
          currNode.right = r;

          res.push(currNode);
        }
      }
    }

    return res;
  }

  if (n === 0) {
    return [];
  }

  return generate(1, n);
}
```

