/*
解题思路：链表题，玩指针
1、创建两个指针变量fast、slow，fast指针每次移动2位，slow指针每次移动1位，
   可以发现，fast指针移动的距离是slow指针的两倍，当fast指针移动到链表结尾时，
   slow指针肯定移到了中间位置，返回这个位置即为中间位置！！
注意：若链表有奇数个节点，当fast指针移动到链表结尾时（fast指向最后一个节点，即fast.next===null），slow指针肯定移到了中间位置
     若链表有偶数个节点，当fast指针移动到链表结尾时（fast会越过最后节点，指向最后的null，即fast===null），slow指针肯定移到了中间位置的后一个位置
2、while循环遍历链表，当fast指针到了最后一个节点 或者 fast会越过最后节点，指向最后的null 就退出循环，否则一直循环：
    2.1、移动fast指针
    2.2、移动slow指针
3、循环结束，返回slow指针指向的链表部分

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
var middleNode = function(head) {

  // 1、创建两个指针变量fast、slow，fast指针每次移动2位，slow指针每次移动1位
  let fast = head;
  let slow = head;

  // 2、while循环遍历链表，当fast指针到了最后一个节点 或者 fast会越过最后节点，指向最后的null 就退出循环，否则一直循环：
  while (fast !== null && fast.next !== null) {
    // 2.1、移动fast指针
    fast = fast.next.next;
    // 2.2、移动slow指针
    slow = slow.next;
  }

  // 3、循环结束，返回slow指针指向的链表部分
  return slow;
};
