/*
解题思路：递归
主要步骤：
1、找到和key值相等的节点
2、删除该节点（四种情况）：
    2.1、无左子树，无右子树 -- 说明是叶子节点，直接删除即可
    2.2、有左子树，无右子树 -- 用左子树直接替换该节点
    2.3、无左子树，有右子树 -- 用右子树直接替换该节点
    2.4、有左子树，有右子树 -- 用左子树的最大值节点替换该节点 或 用右子树的最小值节点替换该节点
注意：以上删除方式均需保证中序遍历的输出序列为升序
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) {
    return root;
  }

  // 1、找到和key值相等的节点
  // 待删除的节点在左子树，递归往左子树找
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    // 待删除的节点在右子树，递归往右子树找
    root.right = deleteNode(root.right, key);
  } else {
    //  key === root.val，则说明找到了
    // 2、开始删除该节点（考虑四种情况）
    // 2.1、无左子树，无右子树 -- 说明是叶子节点，直接删除即可
    if (root.left === null && root.right === null) {
      root = null;
    } else if (root.left !== null && root.right === null) {
      // 2.2、有左子树，无右子树 -- 用左子树直接替换该节点
      root = root.left;
    } else if (root.left === null && root.right !== null) {
      // 2.3、无左子树，有右子树 -- 用右子树直接替换该节点
      root = root.right;
    } else {
      // 2.4、有左子树，有右子树 -- 用右子树的最小值节点替换该节点
      // 找到右子树的最小值节点
      let minValNode = root.right;
      while (minValNode.left !== null) {
        minValNode = minValNode.left;
      }
      // 找到右子树最左端节点，就是其最小值节点，找到后，开始替换
      root.val = minValNode.val;
      // 最小值节点已经移到待删除的节点处，删除该最小值节点
      root.right = deleteNode(root.right, minValNode.val);
    }
  }

  return root;
};
