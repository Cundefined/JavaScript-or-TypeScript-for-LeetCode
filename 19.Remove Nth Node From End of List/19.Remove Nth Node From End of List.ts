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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyZeroNode: ListNode = new ListNode();
  dummyZeroNode.next = head;

  let n1: ListNode = dummyZeroNode;
  let n2: ListNode = dummyZeroNode;

  for (let i: number = 0; i < n; i++) {
    n2 = n2.next;
  }

  while (n2.next !== null) {
    n1 = n1.next;
    n2 = n2.next;
  }

  n1.next = n1.next.next;

  return dummyZeroNode.next;
}
