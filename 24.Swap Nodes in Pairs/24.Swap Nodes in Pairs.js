/*
解题思路：链表题，玩指针
1、创建假的零号节点，让其指向第一个节点，旨在方便交换第一个和第二个节点
2、创建三个指针，prev、n1、n2，让prev在最前面，初始化指向dummy节点,n1在prev后面，n2在n1后面
3、while循环遍历链表，当链表为偶数个节点，则当prev.next===null时，停止循环
   当链表为奇数个节点，最后剩下的那一个节点是不需要交换的，则当prev.next.next===null时，停止循环
   否则，循环六部曲：
   3.1、prev.next指向n2
   3.2、n1.next指向n2下一个节点
   3.3、n2.next指向n1
   3.4、prev移动到n1节点
   3.5、更新n1在prev后面
   3.6、更新n2在n1后面
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 1、创建假的零号节点，让其指向第一个节点，旨在方便交换第一个和第二个节点
  let dummyZeroNode = new ListNode();
  dummyZeroNode.next = head;

  // 2、创建三个指针，prev、n1、n2，让prev在最前面，初始化指向dummy节点
  let prev = dummyZeroNode;
  //   let n1 = prev.next;
  //   let n2 = prev.next.next;

  //   3、while循环遍历链表，当链表为偶数个节点，则当prev.next===null时，停止循环
  //    当链表为奇数个节点，最后剩下的那一个节点是不需要交换的，则当prev.next.next===null时，停止循环
  //    否则，循环六部曲：
  while (prev.next !== null && prev.next.next !== null) {
    let n1 = prev.next;
    let n2 = prev.next.next;
    prev.next = n2;

    n1.next = n2.next;

    n2.next = n1;

    prev = n1;

    // n1 = prev.next;

    // n2 = prev.next.next;
  }

  // 4、返回链表
  return dummyZeroNode.next;
};
