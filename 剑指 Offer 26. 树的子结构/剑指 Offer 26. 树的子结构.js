/*
解题思路：递归
1、isSubStructure函数递归：
    三种情况：
        1.1、B树与A树【整体结构】完全相同 （此情况又分为三种情况讨论，交付给helper函数递归执行） 
        1.2、B树与A树的左子树结构相同 isSubStructure(A.left, B)
        1.2、B树与A树的右子树结构相同 isSubStructure(A.right, B)
    以上，只要有一种情况返回true，则B树是A树的子树
2、helper函数递归：
    三种情况：
        2.1、A树当前节点值，与B树当前节点值，相同
        2.1、A树当前节点的左子树，与B树当前节点的左子树，相同
        2.1、A树当前节点的右子树，与B树当前节点的右子树，相同
    以上，三种情况全都返回true，才能说明B树与A树【整体结构】完全相同
参考视频：https://www.bilibili.com/video/BV1WE411P7rc?t=189
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  // 递归结束条件
  if (A === null || B === null) {
    return false;
  }
  return (
    helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
};

function helper(A, B) {
  // 递归结束条件
  if (B === null) {
    return true;
  }
  if (A === null) {
    return false;
  }

  return A.val === B.val && helper(A.left, B.left) && helper(A.right, B.right);
}
