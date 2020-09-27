/*
解题思路：递归
注意：二叉搜索树特点 -> 左小右大
1、如果p，q的节点值都大于当前节点值，则说明p，q在当前节点的左子树中
2、如果p，q的节点值都小于当前节点值，则说明p，q在当前节点的右子树中
3、否则的话，p，q节点肯定在当前节点的左右两侧或者就是当前节点，那么直接当前节点肯定就是其最近祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 1、如果p，q的节点值都大于当前节点值，则说明p，q在当前节点的左子树中
  if (root.val > p.val && root.val > q.val) {
    //   此时应该去右子树找 情况3
    return lowestCommonAncestor(root.left, p, q);
  }

  //2、如果p，q的节点值都小于当前节点值，则说明p，q在当前节点的右子树中
  if (root.val < p.val && root.val < q.val) {
    //   此时应该去右子树找 情况3
    return lowestCommonAncestor(root.right, p, q);
  }

  // 3、否则的话，p，q节点肯定在当前节点的左右两侧或者就是当前节点，那么直接当前节点肯定就是其最近祖先
  return root;
};
