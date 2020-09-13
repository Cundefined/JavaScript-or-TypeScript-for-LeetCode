/*
解题思路：递归
1、边界条件预判
2、前序遍历的第一个值就是当前树根节点值，以此值来生成根节点
3、在中序遍历中找到该根节点所在位置，以此分界，其左边所有值即为其左子树，右边则为右子树
4、构建左子树
5、构建右子树
6、返回树
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // 1、边界条件预判
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  // 2、前序遍历的第一个值就是当前树根节点值，以此值来生成根节点
  let root = new TreeNode(preorder[0]);

  // 3、在中序遍历中找到该根节点所在位置，以此分界
  //    其左边所有值即为其左子树，右边则为右子树
  // 注意：i索引可以找到根节点在中序遍历中的位置，也可表示左子树的节点数量（左边所有元素的个数）
  let i = 0;
  for (; i < inorder.length; i++) {
    //  找到了根节点就直接退出
    if (inorder[i] === root.val) {
      break;
    }
  }

  //4、构建左子树
  root.left = buildTree(preorder.slice(1, 1 + i), inorder.slice(0, i));
  //5、构建右子树
  root.right = buildTree(
    preorder.slice(1 + i, preorder.length),
    inorder.slice(i + 1, inorder.length)
  );

  //6、返回树
  return root;
};
