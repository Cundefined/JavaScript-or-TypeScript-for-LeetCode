/*
解题思路：方法一、递归
1、定义递归函数，传入当前节点和结果数组：
    1.1、如果当前节点为空，退出递归
    1.2、递归访问当前节点的左节点
    1.3、记录到当前到达的节点值，放入结果数组中
    1.4、递归访问当前节点的右节点
2、创建结果数组
3、调用递归函数
4、返回结果数组
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
