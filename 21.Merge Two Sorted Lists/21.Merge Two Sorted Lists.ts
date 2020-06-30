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
class ListNode2 {
  val: number;
  next: ListNode2 | null;
  constructor(val?: number, next?: ListNode2 | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode2 | null,
  l2: ListNode2 | null
): ListNode2 | null {
  let newListHead: ListNode2 = new ListNode2();

  let head: ListNode2 = newListHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      newListHead.next = l1;
      l1 = l1.next;
    } else {
      newListHead.next = l2;
      l2 = l2.next;
    }

    newListHead = newListHead.next;
  }

  if (l1 !== null) {
    newListHead.next = l1;
  }

  if (l2 !== null) {
    newListHead.next = l2;
  }

  return head.next;
}
