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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let dummy: ListNode | null = new ListNode(0);

  let current: ListNode | null = dummy;

  let carry: number = 0;

  while (l1 != null || l2 != null) {
    let sum: number = 0;

    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }

    sum += carry;

    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);

    current = current.next;
  }

  if (carry == 1) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
}
