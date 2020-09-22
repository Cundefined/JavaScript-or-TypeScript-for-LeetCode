/*
解题思路：反序中序遍历
1、中序遍历可以得到二叉搜索树的节点值升序排列
2、反序过来的话，可以得到节点值降序排列
3、记录当前节点值之前的节点值总和，加上自己的节点值，就可实时更新自己的节点值为累加值
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let prevNodeSum = 0;
  reverseInOrder(root);
  //返回修改后的根节点
  return root;

  function reverseInOrder(root) {
    // 递归结束条件
    if (root === null) {
      return root;
    }
    // 标准中序遍历模板(只不过先遍历有子树，最后遍历左子树)
    reverseInOrder(root.right);
    //把当前节点值加上它之前的节点值总和，更新当前节点值
    root.val = root.val + prevNodeSum;
    //更新prevNodeSum
    prevNodeSum = root.val;
    reverseInOrder(root.left);
  }
};
