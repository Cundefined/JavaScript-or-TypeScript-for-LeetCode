function verifyPostorder(postorder: number[]): boolean {
  //递归终止条件，当所有子树都遍历完之后还没返回false的话，说明是true
  if (postorder.length === 0) {
    return true;
  }
  //取出根节点
  let root: number = postorder[postorder.length - 1];

  //创建两个数组，分别保存当前左子树和右子树，以便于递归传入这两个数组，即继续访问左右子树
  const leftSubTree: number[] = [];
  const rightSubTree: number[] = [];

  let i: number = 0;
  //统计左子树
  while (postorder[i] < root) {
    leftSubTree.push(postorder[i]);
    i++;
  }

  //统计右子树
  while (postorder[i] > root) {
    rightSubTree.push(postorder[i]);
    i++;
  }

  //如果统计结束后，指针i没到根节点位置的话，说明不符合
  if (i !== postorder.length - 1) {
    return false;
  }

  //继续递归判断左右子树是否为二叉搜索树
  return verifyPostorder(leftSubTree) && verifyPostorder(rightSubTree);
}
