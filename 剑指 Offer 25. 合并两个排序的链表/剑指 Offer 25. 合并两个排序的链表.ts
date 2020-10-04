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

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy: ListNode | null = new ListNode(0);
  let dummyCurr: ListNode | null = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      dummyCurr.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      dummyCurr.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    dummyCurr = dummyCurr.next;
  }
  if (l1 !== null) {
    dummyCurr.next = l1;
  }
  if (l2 !== null) {
    dummyCurr.next = l2;
  }

  return dummy.next;
}
