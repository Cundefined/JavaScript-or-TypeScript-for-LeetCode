/*
解题思路：深度优先搜索
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  dfs(root);
  return sum;

  //创建递归函数
  function dfs(currNode) {
    // 递归结束条件
    if (currNode === null) {
      return;
    }

    //如果当前节点的左子节点是叶子节点，则计入求和
    if (
      currNode.left !== null &&
      currNode.left.left === null &&
      currNode.left.right === null
    ) {
      sum += currNode.left.val;
    }

    //否则，继续递归遍历左右子节点
    dfs(currNode.left);
    dfs(currNode.right);
  }
};
