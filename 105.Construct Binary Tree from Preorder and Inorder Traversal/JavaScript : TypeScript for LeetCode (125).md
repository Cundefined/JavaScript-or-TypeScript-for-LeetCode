# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第105题 )  从前序与中序遍历序列构造二叉树**](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
       

## 2、解题思路
**方法：递归**
```javascript
注意：
前序遍历 -> [ 根节点, [左子树的前序遍历结果], [右子树的前序遍历结果] ]
中序遍历 -> [ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // map记录中序遍历元素和位置的对应关系，快速定位根节点
  //省得每次递归调用都去遍历inorder数组，这样只遍历一次就行
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return helper(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    map
  );
};

function helper(preorder, preStart, preEnd, inorder, inStart, inEnd, map) {
  // 递归结束条件
  if (preStart > preEnd || inStart > inEnd) {
    return null;
  }

  //在前序遍历结果数组中找到当前根节点
  let root = new TreeNode(preorder[preStart]);
  //找到当前根节点在中序遍历结果数组中的位置，以此计算得到左、右子树长度
  let rootPos = map.get(preorder[preStart]);
  //计算左子树长度
  let leftSubTreeLength = rootPos - inStart;

  // 构建左子树
  // 左子树的前序遍历：preStart+1 到 preStart+leftSubTreeLength
  // 左子树的中序遍历：inStart 到 rootPos-1
  root.left = helper(
    preorder,
    preStart + 1,
    preStart + leftSubTreeLength,
    inorder,
    inStart,
    rootPos - 1,
    map
  );

  // 构建右子树
  // 右子树的前序遍历：preStart+1 到 preStart+leftSubTreeLength
  // 右子树的中序遍历：inStart 到 rootPos-1
  root.right = helper(
    preorder,
    preStart + leftSubTreeLength + 1,
    preEnd,
    inorder,
    rootPos + 1,
    inEnd,
    map
  );

  return root;
}
```


