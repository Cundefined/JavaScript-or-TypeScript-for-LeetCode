/*
解题思路：广度优先搜索（层序遍历）
序列化：
    1、标准的层序遍历模板，维持一个队列
    2、返回指定的字符串形式的结果
反序列化：
也是层序遍历的思想，维持一个队列
    1、由序列化的结果可知当前元素的父节点肯定在它前面
    2、因此，需要提前判断当前元素是其前面节点的左孩子还是有孩子
    3、这样，才能方便的连接节点
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = [];

  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let currNode = queue.shift();

    if (currNode === null) {
      //res += "null,";
      res.push("null");
    } else {
      //res += currNode.val + ",";
      res.push(String(currNode.val));
      //左右孩子入队
      queue.push(currNode.left);
      queue.push(currNode.right);
    }
  }
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] === "null") {
      res.pop();
    } else {
      break;
    }
  }
  //去掉最后面多出来的一个逗号
  let strRes = res.join(",");
  //追加右中括号，闭合树
  strRes = "[" + strRes + "]";
  console.log(strRes);

  return strRes;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let treeNodeArr = data.substring(1, data.length - 1).split(",");
  console.log(treeNodeArr);

  //取出第一个元素，即根节点
  let root = treeNodeArr[0];

  //维护一个队列，记录当前节点的父亲
  const parentNodeQueue = [];

  //初始化把当前节点加入父亲队列
  parentNodeQueue.push(root);

  //标记当前节点是否为左孩子
  let isLeftSubTreeNode = true;

  let currParent = null;
  for (let i = 1; i < treeNodeArr.length; i++) {
    let currNode = char2Node(treeNodeArr[i]);
    //碰到左孩子就父亲出队，因为碰到左孩子就会出现新的一层
    if (isLeftSubTreeNode) {
      currParent = parentNodeQueue.shift();
    }

    if (currNode !== null) {
      // 先把当前节点存入父亲节点的队列中，供后面的孩子节点使用，方便他们找到自己的父亲
      parentNodeQueue.push(currNode);
    }

    //判断当前节点是其父亲的左孩子还是右孩子，并连接好
    if (isLeftSubTreeNode) {
      currParent.left = currNode;
    } else {
      currParent.right = currNode;
    }

    //更新标志
    isLeftSubTreeNode = !isLeftSubTreeNode;
  }
  return root;
};

//创建字符转为树节点的函数
function char2Node(c) {
  if (c === "null") {
    return null;
  }

  return new TreeNode(parseInt(c));
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
