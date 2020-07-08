/*
解题思路：
1、创建两个指针p1、p2，分别指向两个链表头部
2、当p1、p2不相等时，说明指向的不是同一个节点，while循环判断：
    2.1、如果p1为null说明第一个链表走完了，应该重新指向另一条链表的头部，再走一次
    2.2、否则还没走完的话就把p1往后移
    2.3、对p2进行一样的操作
3、循环结束，返回p1、p2任意一个即可
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 1、创建两个指针p1、p2，分别指向两个链表头部
  let p1 = headA;
  let p2 = headB;

  // 2、当p1、p2不相等时，说明指向的不是同一个节点，while循环判断：
  while (p1 !== p2) {
    // 2.1、如果p1为null说明第一个链表走完了，应该重新指向另一条链表的头部，再走一次
    if (p1 === null) {
      p1 = headB;
    } else {
      // 2.2、否则还没走完的话就把p1往后移
      p1 = p1.next;
    }

    // 2.3、对p2进行一样的操作
    if (p2 === null) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
  }

  // 3、循环结束，返回p1、p2任意一个即可
  return p1;
};
