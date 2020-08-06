/*
解题思路：
1、定义计算树高度的函数，传入当前节点，返回当前节点子树的高度：
    1.1、如果当前节点为空，则高度为0
    1.2、递归计算当前节点的左子树、右子树高度
    1.3、计算当前节点的高度，并返回结果
2、边界条件预判，如果当前根节点为空，返回true
3、计算当前根节点的左右子树的高度
4、如果当前根节点的左右子树高度差大于1，就返回false
5、否则，继续判断左右子节点的子树，只有全部返回true才返回true
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
var isBalanced = function (root) {
  // 1、定义计算树高度的函数，传入当前节点，返回当前节点子树的高度：
  function calculateTreeHeight(currNode) {
    // 1.1、如果当前节点为空，则高度为0
    if (currNode === null) {
      return 0;
    }

    // 1.2、递归计算当前节点的左子树、右子树高度
    let leftNodeHeight = calculateTreeHeight(currNode.left);
    let rightNodeHeight = calculateTreeHeight(currNode.right);

    // 1.3、计算当前节点的高度
    let currNodeHeight = Math.max(leftNodeHeight, rightNodeHeight) + 1;
    return currNodeHeight;
  }

  // 2、边界条件预判，如果当前根节点为空，返回true
  if (root === null) {
    return true;
  }

  // 3、计算当前根节点的左右子树的高度
  let leftNodeHeight = calculateTreeHeight(root.left);
  let rightNodeHeight = calculateTreeHeight(root.right);

  // 4、如果当前根节点的左右子树高度差大于1，就返回false
  if (Math.abs(leftNodeHeight - rightNodeHeight) > 1) {
    return false;
  }

  // 5、否则，继续判断左右子节点的子树，只有全部返回true才返回true
  return isBalanced(root.left) && isBalanced(root.right);
};
