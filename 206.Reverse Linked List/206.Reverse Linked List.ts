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
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  let next: ListNode | null = head;

  while (curr !== null) {
    // next = curr.next;
    // curr.next = prev;
    // prev = curr;
    // curr = next;

    [curr.next, prev, curr] = [prev, curr, curr.next];
  }

  return prev;
}
