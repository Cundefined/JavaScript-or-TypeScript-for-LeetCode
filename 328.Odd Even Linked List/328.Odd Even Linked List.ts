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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    if (head.next === null) {
        return head;
    }

    let odd: ListNode | null = head;
    let even: ListNode | null = head.next;

    let firstEvenNode: ListNode | null = head.next;

    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }

    odd.next = firstEvenNode;

    return head;
};