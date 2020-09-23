/*
解题思路：递归
1、如果两个节点都为空，返回null
2、如果t1, t2有一者为空，则节点值不用相加，直接返回另外的非空的节点值
3、否则，都不为空，需要将节点值相加，直接加到t1树节点
4、返回t1树节点
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  // 1、如果两个节点都为空，返回null
  if (t1 === null && t2 === null) {
    return null;
  }
  // 2、如果t1, t2有一者为空，则节点值不用相加，直接返回另外的非空的节点值
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }

  //3、否则，都不为空，需要将节点值相加，直接加到t1树节点
  t1.val = t1.val + t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);

  // 4、返回t1树节点
  return t1;
};
