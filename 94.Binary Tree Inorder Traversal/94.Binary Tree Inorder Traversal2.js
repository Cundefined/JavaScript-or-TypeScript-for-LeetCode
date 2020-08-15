/*
解题思路：方法二、栈
1、创建栈和结果数组
2、创建变量，保存当前节点，初始化为根节点
3、while循环，当当前节点不为空，或者栈不为空时，循环：
  3.1、如果当前节点不为空，则把当前节点先入栈保存，并且节点移动到其左节点
  3.2、否则，到达null节点，则弹出之前保存的有效节点，并保存到结果数组，继续移动到其右节点
4、循环结束，返回结果数组
*/

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
