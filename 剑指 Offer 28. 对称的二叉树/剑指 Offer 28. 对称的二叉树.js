/*
解题思路：递归
两个子树是否镜像对称的条件：
    1、子树1当前节点值，与子树2当前节点值，相同
    2、子树1当前节点的【左】子树，与子树2前节点的【右】子树，相同
    3、子树1当前节点的【右】子树，与子树2前节点的【左】子树，相同
以上，三种情况全都返回true，才能说明两个子树是否镜像对称
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  //边界条件
  if (root === null) {
    return true;
  }

  //调用递归函数
  return helper(root.left, root.right);
};

//创建递归函数，判断两个子树是否镜像对称
function helper(subTree1, subTree2) {
  // 递归终止条件
  if (subTree1 === null && subTree2 === null) {
    return true;
  }
  //两个子树，有一个为空的话，肯定不对称了
  if (subTree1 === null || subTree2 === null) {
    return false;
  }

  //两个子树是否镜像对称的三个条件
  return (
    subTree1.val === subTree2.val &&
    helper(subTree1.left, subTree2.right) &&
    helper(subTree1.right, subTree2.left)
  );
}
