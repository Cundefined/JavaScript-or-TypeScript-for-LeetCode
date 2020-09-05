/*
解题思路：方法一、递归
1、若 root == null，则返回 TreeNode(val)
2、若 val > root.val，插入到右子树root.right
3、若 val < root.val，插入到左子树root.left
4、插入结束后，返回 root
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  // 1、若 root == null，则返回 TreeNode(val)
  if (root === null) {
    return new TreeNode(val);
  }

  //   2、若 val > root.val，插入到右子树root.right
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }

  // 3、若 val < root.val，插入到左子树root.left
  if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }

  // 4、插入结束后，返回 root
  return root;
};
