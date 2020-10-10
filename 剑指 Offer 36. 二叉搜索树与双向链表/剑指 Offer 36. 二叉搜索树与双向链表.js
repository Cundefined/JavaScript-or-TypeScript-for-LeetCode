/*
解题思路：
    1、二叉搜索树中序遍历结果是从小到大排序的
    2、对中序遍历的结果数组中的每个节点元素，进行遍历，连接节点关系，构成双向链表
*/
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (root === null) {
        return null;
    }

    const inOrderRes = [];
    //中序遍历
    inOrder(root, inOrderRes);


    let len = inOrderRes.length
    const head = inOrderRes[0];
    const tail = inOrderRes[len - 1];
    head.left = tail;
    tail.right = head;

    if (len === 1) {
         head.right = tail;
         tail.left = head;
         return head;
    }

    //对中序遍历的结果数组中的每个节点元素，进行遍历，连接节点关系，构成双向链表
    for (let i = 0; i < len; i++) {
        if (i === 0) {
            head.right = inOrderRes[i+1];
            
        } else if (i === len - 1) {
            
            tail.left = inOrderRes[i-1];
        } else {
            inOrderRes[i].right = inOrderRes[i+1];
            inOrderRes[i].left = inOrderRes[i-1];
        } 
    }

    return head;

};

function inOrder(root, inOrderRes) { 
    //递归终止条件
    if (root === null) {
        return;
    }

    inOrder(root.left, inOrderRes);
    inOrderRes.push(root);
    inOrder(root.right, inOrderRes);
 }