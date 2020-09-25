/*
解题思路：递归
【参考105.Construct Binary Tree from Preorder and Inorder Traversal】
注意：
后序遍历 -> [ [左子树的后序遍历结果], [右子树的后序遍历结果], 根节点]
中序遍历 -> [ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // map记录中序遍历元素和位置的对应关系，快速定位根节点
  //省得每次递归调用都去遍历inorder数组，这样只遍历一次就行
  let map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return helper(
    postorder,
    0,
    postorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
    map
  );
};

function helper(postorder, postStart, postEnd, inorder, inStart, inEnd, map) {
  // 递归结束条件
  if (postStart < 0 || inStart > inEnd) {
    return null;
  }

  //在后序遍历结果数组中找到当前根节点
  let root = new TreeNode(postorder[postEnd]);
  //找到当前根节点在中序遍历结果数组中的位置，以此计算得到左、右子树长度
  let rootPos = map.get(postorder[postEnd]);
  //计算左子树长度
  let leftSubTreeLength = rootPos - inStart;

  // 构建左子树
  // 左子树的后序遍历：postStart 到 postStart+leftSubTreeLength-1
  // 左子树的中序遍历：inStart 到 rootPos-1
  root.left = helper(
    postorder,
    postStart,
    postStart + leftSubTreeLength - 1,
    inorder,
    inStart,
    rootPos - 1,
    map
  );

  // 构建右子树
  // 右子树的后序遍历：postStart+leftSubTreeLength 到 postEnd - 1
  // 右子树的中序遍历：inStart 到 rootPos-1
  root.right = helper(
    postorder,
    postStart + leftSubTreeLength,
    postEnd - 1,
    inorder,
    rootPos + 1,
    inEnd,
    map
  );

  return root;
}
