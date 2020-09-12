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

function reversePrint(head: ListNode | null): number[] {
  if (head === null) {
    return [];
  }
  let len: number = 0;
  let curr: ListNode | null = head;
  while (curr !== null) {
    len++;
    curr = curr.next;
  }

  const res: number[] = new Array(len);

  curr = head;

  let i: number = len - 1;

  while (curr !== null) {
    res[i--] = curr.val;
    curr = curr.next;
  }

  return res;
}
