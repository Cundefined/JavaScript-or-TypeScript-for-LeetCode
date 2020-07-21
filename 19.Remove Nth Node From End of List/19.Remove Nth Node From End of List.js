/*
解题思路：链表题，完指针
1、创建假的零号节点dummyZeroNode，旨在防止只有一个节点且需要删除该节点时，无法站在它前一个节点来删除它
2、创建两个指针n1和n2，初始化都指向dummyZeroNode节点
3、for循环将n2往前移动n个节点，以此来和n1隔开长度为n的距离
4、while循环移动n1和n2指针，当n2到达最后一个节点时，n1就会相应到达要删除的节点的前一个节点位置（因为n1和n2相隔n的距离）
5、循环结束后，将n1节点指向下下个节点，即可绕过要删除的节点，完成删除
6、返回链表
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 1、创建假的零号节点dummyZeroNode，旨在防止只有一个节点且需要删除该节点时，无法站在它前一个节点来删除它
  let dummyZeroNode = new ListNode();
  dummyZeroNode.next = head;

  // 2、创建两个指针n1和n2，初始化都指向dummyZeroNode节点
  let n1 = dummyZeroNode;
  let n2 = dummyZeroNode;

  // 3、for循环将n2往前移动n个节点，以此来和n1隔开长度为n的距离
  for (let i = 0; i < n; i++) {
    n2 = n2.next;
  }

  // 4、while循环移动n1和n2指针，当n2到达最后一个节点时，n1就会相应到达要删除的节点的前一个节点位置（因为n1和n2相隔n的距离）
  while (n2.next !== null) {
    n1 = n1.next;
    n2 = n2.next;
  }

  // 5、循环结束后，将n1节点指向下下个节点，即可绕过要删除的节点，完成删除
  n1.next = n1.next.next;

  // 6、返回链表
  return dummyZeroNode.next;
};
