# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第113题 )  路径总和 II**](https://leetcode-cn.com/problems/path-sum-ii/)
       




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

  dfs(root, sum, []);
  return res;

  function dfs(root, sum, path) {
    // 1、递归结束条件
    if (root === null) {
      return;
    }
    // 2、将当前非空节点加入路径
    path.push(root.val);
    // 3、将当前节点值从目标sum中减去
    sum = sum - root.val;
    // 4、碰到叶子节点 就把path加入结果
    if (root.left === null && root.right === null && sum === 0) {
      res.push([...path]);
    }

    // 5、递归遍历左子树
    dfs(root.left, sum, path);

    // 6、递归遍历右子树
    dfs(root.right, sum, path);

    // 7、回溯
    path.pop();
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

function pathSum(root: TreeNode | null, sum: number): number[][] {
  const res: number[][] = [];

  dfs(root, sum, []);
  return res;

  function dfs(root: TreeNode | null, sum: number, path: number[]): void {
    // 1、递归结束条件
    if (root === null) {
      return;
    }
    // 2、将当前非空节点加入路径
    path.push(root.val);
    // 3、将当前节点值从目标sum中减去
    sum = sum - root.val;
    // 4、碰到叶子节点 就把path加入结果
    if (root.left === null && root.right === null && sum === 0) {
      res.push([...path]);
    }

    // 5、递归遍历左子树
    dfs(root.left, sum, path);

    // 6、递归遍历右子树
    dfs(root.right, sum, path);

    // 7、回溯
    path.pop();
  }
}
```

