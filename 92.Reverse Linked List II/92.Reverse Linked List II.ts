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

function reverseBetween(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  let next: ListNode | null = head;

  for (let i: number = 1; i < m; i++) {
    if (curr !== null) {
      prev = curr;
      curr = curr.next;
      next = curr;
    }
  }

  let beforeM: ListNode | null = prev;
  let currM: ListNode | null = curr;

  for (let i: number = m; i <= n; i++) {
    if (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  }

  if (beforeM === null) {
    head = prev;
  } else {
    beforeM.next = prev;
  }

  if (currM !== null) {
    currM.next = curr;
  }

  return head;
}
