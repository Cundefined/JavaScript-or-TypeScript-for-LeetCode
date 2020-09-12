/*
解题思路：
1、遍历一遍链表，记录其长度
2、以其长度，创建一个等长度的数组
3、从数组最后位置依次加入链表节点值
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (head === null) {
    return [];
  }
  let len = 0;
  let curr = head;
  while (curr !== null) {
    len++;
    curr = curr.next;
  }

  const res = new Array(len);

  curr = head;

  let i = len - 1;

  while (curr !== null) {
    res[i--] = curr.val;
    curr = curr.next;
  }

  return res;
};
