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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  //1、边界条件预判
  if (head && head.val === val) {
    return head.next;
  }
  //2、创建两个个指针，初始指向头部（prev指针方便删除节点）
  let curr: ListNode | null = head;
  let prev: ListNode | null = head;

  //3、while循环遍历链表，找到就删除节点，并移除循环
  while (curr !== null) {
    curr = curr.next;
    if (curr && curr.val === val) {
      prev && (prev.next = curr.next);
      break;
    }
    prev && (prev = prev.next);
  }
  //4、返回链表
  return head;
}
