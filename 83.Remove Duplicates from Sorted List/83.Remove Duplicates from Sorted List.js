/*
解题思路：链表题，玩指针
1、边界条件预判，如果给定的是空链表或者只有一个节点，则直接返回该空链表
2、创建指针，初始化指向链表头部
3、while循环，当指针走到链表最后一个节点时，就停止，否则：
    3.1、判断如果当前节点的值等于下一节点的值，说明是重复节点，应删除该下一节点
    3.2、否则，指针正常后移
4、循环结束，返回链表
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 1、边界条件预判，如果给定的是空链表或者只有一个节点，则直接返回该空链表
  if (head === null) {
    return head;
  }

  if (head.next === null) {
    return head;
  }

  // 2、创建指针，初始化指向链表头部
  let current = head;

  //   3、while循环，当指针走到链表最后一个节点时，就停止，否则：
  while (current.next !== null) {
    // 3.1、判断如果当前节点的值等于下一节点的值，说明是重复节点，应删除该下一节点
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      // 3.2、否则，指针正常后移
      current = current.next;
    }
  }

  // 4、循环结束，返回链表
  return head;
};
