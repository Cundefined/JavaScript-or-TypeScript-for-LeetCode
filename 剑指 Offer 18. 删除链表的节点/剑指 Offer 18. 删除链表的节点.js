/*
解题思路：链表题，玩指针
1、边界条件预判
2、创建两个个指针，初始指向头部（prev指针方便删除节点）
3、while循环遍历链表，找到就删除节点，并移除循环
4、返回链表
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  //1、边界条件预判
  if (head.val === val) {
    return head.next;
  }
  //2、创建两个个指针，初始指向头部（prev指针方便删除节点）
  let curr = head;
  let prev = head;

  //3、while循环遍历链表，找到就删除节点，并移除循环
  while (curr !== null) {
    curr = curr.next;
    if (curr.val === val) {
      prev.next = curr.next;
      break;
    }
    prev = prev.next;
  }
  //4、返回链表
  return head;
};
