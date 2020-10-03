/*
解题思路：链表题，玩指针
1、创建两个指针fast、slow，初始化指向head
2、for循环将fast往前移动k个节点，以此来和slow隔开长度为k的距离
3、while循环移动fast和slow指针，当fast到达最后一个节点时，
slow就会相应到达倒数第k个节点（因为fast和slow相隔n的距离）
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
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  // 1、创建两个指针fast、slow，初始化指向head
  let fast = head;
  let slow = head;

  // 2、for循环将fast往前移动k个节点，以此来和slow隔开长度为k的距离
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  //3、while循环移动fast和slow指针，当fast到达最后一个节点时，
  //   slow就会相应到达倒数第k个节点（因为fast和slow相隔n的距离）
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
