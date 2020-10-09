# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 33 )  二叉搜索树的后序遍历序列**](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/)
      


## 2、解题思路
**方法：递归**
```javascript
利用二叉搜索树后序遍历的特点：
    1、postorder最后一个元素为当前树的根节点
    2、左子树的所有元素小于该根节点
    3、右子树的所有元素大于该根节点
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
  //递归终止条件，当所有子树都遍历完之后还没返回false的话，说明是true
  if (postorder.length === 0) {
    return true;
  }
  //取出根节点
  let root = postorder[postorder.length - 1];

  //创建两个数组，分别保存当前左子树和右子树，以便于递归传入这两个数组，即继续访问左右子树
  const leftSubTree = [];
  const rightSubTree = [];

  let i = 0;
  //统计左子树
  while (postorder[i] < root) {
    leftSubTree.push(postorder[i]);
    i++;
  }

  //统计右子树
  while (postorder[i] > root) {
    rightSubTree.push(postorder[i]);
    i++;
  }

  //如果统计结束后，指针i没到根节点位置的话，说明不符合
  if (i !== postorder.length - 1) {
    return false;
  }

  //继续递归判断左右子树是否为二叉搜索树
  return verifyPostorder(leftSubTree) && verifyPostorder(rightSubTree);
};

```

### 2.2、TypeScript Solution

```javascript
function verifyPostorder(postorder: number[]): boolean {
  //递归终止条件，当所有子树都遍历完之后还没返回false的话，说明是true
  if (postorder.length === 0) {
    return true;
  }
  //取出根节点
  let root: number = postorder[postorder.length - 1];

  //创建两个数组，分别保存当前左子树和右子树，以便于递归传入这两个数组，即继续访问左右子树
  const leftSubTree: number[] = [];
  const rightSubTree: number[] = [];

  let i: number = 0;
  //统计左子树
  while (postorder[i] < root) {
    leftSubTree.push(postorder[i]);
    i++;
  }

  //统计右子树
  while (postorder[i] > root) {
    rightSubTree.push(postorder[i]);
    i++;
  }

  //如果统计结束后，指针i没到根节点位置的话，说明不符合
  if (i !== postorder.length - 1) {
    return false;
  }

  //继续递归判断左右子树是否为二叉搜索树
  return verifyPostorder(leftSubTree) && verifyPostorder(rightSubTree);
}

```

