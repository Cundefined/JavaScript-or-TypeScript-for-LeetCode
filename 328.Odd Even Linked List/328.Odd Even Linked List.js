/*
解题思路：链表题，玩指针
1、边界条件预判
    1.1、如果给定链表为空，返回null
    1.2、如果给定链表只有一个节点，返回当前链表
2、创建两个指针，odd指向奇数位置，even指向偶数位置，初始化分别指向第一个和第二个节点
3、创建一个占位指针，占住第一个偶数位置，之后需要把奇数的结尾指向这个位置，从而形成最后的奇偶链表
4、while循环，如果even到达null或者到达最后一个节点，就停止循环，否则，继续循环：
    4.1、先把odd指向的当前节点连接到下一个奇数位置
    4.2、再利用当前连接，把odd指针指向刚刚连接到的奇数节点
    4.3、先把even指向的当前节点连接到下一个偶数位置
    4.4、再利用当前连接，把even指针指向刚刚连接到的偶数节点
5、循环结束后，所有奇数节点连起来了，偶数节点也连起来了，现在需要把最后一个奇数节点，连接到之前占好的第一个偶数节点位置
6、返回整个链表
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  // 1、边界条件预判
  //   1.1、如果给定链表为空，返回null
  if (head === null) {
    return null;
  }
  //   1.2、如果给定链表只有一个节点，返回当前链表
  if (head.next === null) {
    return head;
  }

  // 2、创建两个指针，odd指向奇数位置，even指向偶数位置，初始化分别指向第一个和第二个节点
  let odd = head;
  let even = head.next;

  // 3、创建一个占位指针，占住第一个偶数位置，之后需要把奇数的结尾指向这个位置，从而形成最后的奇偶链表
  let firstEvenNode = head.next;

  // 4、while循环，如果even到达null或者到达最后一个节点，就停止循环，否则，继续循环：
  while (even !== null && even.next !== null) {
    // 4.1、先把odd指向的当前节点连接到下一个奇数位置
    odd.next = odd.next.next;

    // 4.2、再利用当前连接，把odd指针指向刚刚连接到的奇数节点
    odd = odd.next;

    // 4.3、先把even指向的当前节点连接到下一个偶数位置
    even.next = even.next.next;

    // 4.4、再利用当前连接，把even指针指向刚刚连接到的偶数节点
    even = even.next;
  }

  // 5、循环结束后，所有奇数节点连起来了，偶数节点也连起来了，现在需要把最后一个奇数节点，连接到之前占好的第一个偶数节点位置
  odd.next = firstEvenNode;

  // 6、返回整个链表
  return head;
};
