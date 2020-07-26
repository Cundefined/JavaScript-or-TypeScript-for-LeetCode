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

function swapPairs(head: ListNode | null): ListNode | null {
    let dummyZeroNode: ListNode | null = new ListNode();
    dummyZeroNode.next = head;
  
    let prev: ListNode | null = dummyZeroNode;
  
    while (prev.next !== null && prev.next.next !== null) {
      let n1: ListNode | null = prev.next;
      let n2: ListNode | null = prev.next.next;
      prev.next = n2;
  
      n1.next = n2.next;
  
      n2.next = n1;
  
      prev = n1;
  
    }
  
    return dummyZeroNode.next;
};