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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  // 1、创建两个指针fast、slow，初始化指向head
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  // 2、for循环将fast往前移动k个节点，以此来和slow隔开长度为k的距离
  for (let i: number = 0; i < k; i++) {
    fast = fast && fast.next;
  }

  //3、while循环移动fast和slow指针，当fast到达最后一个节点时，
  //   slow就会相应到达倒数第k个节点（因为fast和slow相隔n的距离）
  while (fast !== null) {
    fast = fast && fast.next;
    slow = slow && slow.next;
  }

  return slow;
}
