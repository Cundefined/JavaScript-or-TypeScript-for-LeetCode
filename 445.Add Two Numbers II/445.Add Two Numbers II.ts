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
  let stack1: Array<number> = [];
  let stack2: Array<number> = [];

  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let curr: ListNode | null = null;

  let carry: number = 0;

  while (stack1.length !== 0 || stack2.length !== 0) {
    let sum: number = 0;

    if (stack1.length !== 0) {
      sum += stack1.pop();
    }

    if (stack2.length !== 0) {
      sum += stack2.pop();
    }

    sum += carry;

    carry = Math.floor(sum / 10);

    let newNode: ListNode | null = new ListNode(sum % 10);

    newNode.next = curr;
    curr = newNode;
  }

  if (carry === 1) {
    let newNode: ListNode | null = new ListNode(carry);
    newNode.next = curr;
    curr = newNode;
  }

  return curr;
}
