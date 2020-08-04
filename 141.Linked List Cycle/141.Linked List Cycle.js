/*
解题思路：链表题，玩指针
1、边界条件为预判，如果输入为空链表，则返回-1
2、创建两个指针，分别为快指针和慢指针，初始指向头部，快指针每次走两步
3、while循环，遍历链表，当快指针到最后一个节点或者倒数第二个节点时，停止循环，否则：
    3.1、慢指针走一步
    3.2、快指针走两步
    3.3、如果两个指针相遇时，说明有环，返回true
4、循环结束都没返回的话，说明没环，返回false

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
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 1、边界条件为预判，如果输入为空链表，则返回-1
  if (head === null) {
    return false;
  }

  // 2、创建两个指针，分别为快指针和慢指针，初始指向头部，快指针每次走两步
  let fast = head;
  let slow = head;

  // 3、while循环，遍历链表，当快指   针到最后一个节点或者倒数第二个节点时，停止循环，否则：
  while (fast.next !== null && fast.next.next !== null) {
    // 3.1、慢指针走一步
    slow = slow.next;
    // 3.2、快指针走两步
    fast = fast.next.next;
    // 3.3、如果两个指针相遇时，说明有环，返回true
    if (slow === fast) {
      return true;
    }
  }

  // 4、循环结束都没返回的话，说明没环，返回false
  return false;
};
