/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  // 1、创建三个指针prev、curr、next
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  let next: ListNode | null = head;

  // 链表没走完的话，就一直往后挪
  // 2、循环四部曲：
  while (curr !== null) {
    next = curr && curr.next;
    curr && (curr.next = prev);
    prev = curr;
    curr = next;
  }

  // 3、循环遍历到curr为null，即走完了链表，返回prev指向的节后，即最后一个节点，也是反转链表的head
  return prev;
}
