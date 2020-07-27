/*
解题思路：链表题，玩指针
注意：关键在处理好进位问题
1、为了返回新的链表，需要创建一个假的零号节点，在此节点后面拼接出新的链表即可
2、创建current指针，初始指向dummy节点，后续每拼接一个节点就往后移，便于后续拼接新节点
3、创建一个carry变量，表示目前运算是否需要进位，初始化为0
4、while循环，遍历两个输入链表，只有两个链表都遍历完了才退出循环，否则，继续遍历：
    4.1、创建保存”位运算和“的变量，初始化为0
    4.2、如果链表l1还没到头，就处理一下l1
    4.3、如果链表l2还没到头，就处理一下l2
    4.4、sum加上进位
    4.5、更新进位变量carry的值
    4.6、生成一个值为sum % 10(取出个位)的新节点，加到新链表中
    4.7、已经新增了节点，需要把current指针往下一节点移动一位
5、新链表生成后，最后一位的运算可能还有进位，所以需要再判断一下：
    5.1、如果carry变量为1，说明还有进位，需要新增一个值为carry的节点
6、返回新节点
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 1、为了返回新的链表，需要创建一个假的零号节点，在此节点后面拼接出新的链表即可
  let dummy = new ListNode();

  // 2、创建current指针，初始指向dummy节点，后续每拼接一个节点就往后移，便于后续拼接新节点
  let current = dummy;

  // 3、创建一个carry变量，表示目前运算是否需要进位，初始化为0
  let carry = 0;

  // 4、while循环，遍历两个输入链表，只有两个链表都遍历完了才退出循环，否则，继续遍历：
  while (l1 !== null || l2 !== null) {
    // 4.1、创建保存”位运算和“的变量，初始化为0
    let sum = 0;

    // 4.2、如果链表l1还没到头，就处理一下l1
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    // 4.3、如果链表l2还没到头，就处理一下l2
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    // 4.4、sum加上进位
    sum += carry;

    // 4.5、更新进位变量carry的值
    carry = Math.floor(sum / 10);

    // 4.6、生成一个值为sum % 10(取出个位)的新节点，加到新链表中
    current.next = new ListNode(sum % 10);

    // 4.7、已经新增了节点，需要把current指针往下一节点移动一位
    current = current.next;
  }

  // 5、新链表生成后，最后一位的运算可能还有进位，所以需要再判断一下：
  if (carry === 1) {
    current.next = new ListNode(carry);
  }

  //   6、返回新节点
  return dummy.next;
};
