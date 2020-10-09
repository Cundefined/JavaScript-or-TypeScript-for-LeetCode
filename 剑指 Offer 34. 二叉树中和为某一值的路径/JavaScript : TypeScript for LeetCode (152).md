# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 34 )   二叉树中和为某一值的路径**](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/)
      


## 2、解题思路
**方法：深度优先递归 回溯**
```javascript
创建dfs函数：
    1、递归结束条件
    2、将当前非空节点加入路径
    3、将当前节点值从目标sum中减去
    4、碰到叶子节点 就把path加入结果
    5、递归遍历左子树
    6、递归遍历右子树
    7、回溯
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const res = [];
  const path = [];
  dfs(root, sum, res, path);
  return res;
};

function dfs(root, sum, res, path) {
  if (root === null) {
    return;
  }

  path.push(root.val);

  sum = sum - root.val;

  if (root.left === null && root.right === null && sum === 0) {
    res.push([...path]);
  }

  dfs(root.left, sum, res, path);
  dfs(root.right, sum, res, path);

  path.pop();
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

function pathSum(root: TreeNode | null, sum: number): number[][] {
  const res: number[][] = new Array<number[]>();
  const path: number[] = [];
  dfs(root, sum, res, path);
  return res;
}

function dfs(
  root: TreeNode | null,
  sum: number,
  res: number[][],
  path: number[]
): void {
  if (root === null) {
    return;
  }

  path.push(root.val);

  sum = sum - root.val;

  if (root.left === null && root.right === null && sum === 0) {
    res.push([...path]);
  }

  dfs(root.left, sum, res, path);
  dfs(root.right, sum, res, path);

  path.pop();
}
```

