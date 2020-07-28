/*
解题思路：链表题，玩指针 【参考：2.Add Two Numbers】
注意：此题和第2题的区别在于，高位在链表头部，低位在链表尾部，而链表只能由前向后依次遍历，
     即不能先计算低位，所以需要创建“栈”，先进后出，从而达到反转链表的效果
1、创建两个栈，分别存放两个链表的节点值
2、分别while循环，把两个链表的节点值push进各自的栈
3、创建curr指针，初始指向null，即指向新链表的“尾部”，因为后续要从尾部往前拼接链表
4、创建一个carry变量，表示目前运算是否需要进位，初始化为0
5、while循环，遍历两个栈，只有两个栈都遍历完了才退出循环，否则，继续遍历：
    5.1、创建保存”位运算和“的变量，初始化为0
    5.2、如果stack1元素还没pop完，就pop出栈顶的元素，加进sum
    5.3、如果stack2元素还没pop完，就pop出栈顶的元素，加进sum
    5.4、sum加上进位
    5.5、更新进位变量carry的值
    5.6、生成一个值为sum % 10(取出个位)的新节点，加到新链表中
    5.7、已经新增了节点，需要新节点指向curr指针所占位的节点，然后把curr指针往前移到当前新节点处，
        占住这个新节点，便于后面新添加节点指向这个节点
6、新链表生成后，最后一位的运算可能还有进位，所以需要再判断一下：
    6.1、如果carry变量为1，说明还有进位，需要新增一个值为carry的节点
7、返回新链表
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
  // 1、创建两个栈，分别存放两个链表的节点值
  let stack1 = [];
  let stack2 = [];

  // 2、分别while循环，把两个链表的节点值push进各自的栈
  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  // 3、创建curr指针，初始指向null，即指向新链表的“尾部”，因为后续要从尾部往前拼接链表
  let curr = null;

  // 4、创建一个carry变量，表示目前运算是否需要进位，初始化为0
  let carry = 0;

  // 5、while循环，遍历两个栈，只有两个栈都遍历完了才退出循环，否则，继续遍历：
  while (stack1.length !== 0 || stack2.length !== 0) {
    // 5.1、创建保存”位运算和“的变量，初始化为0
    let sum = 0;

    // 5.2、如果stack1元素还没pop完，就pop出栈顶的元素，加进sum
    if (stack1.length !== 0) {
      sum += stack1.pop();
    }

    // 5.3、如果stack2元素还没pop完，就pop出栈顶的元素，加进sum
    if (stack2.length !== 0) {
      sum += stack2.pop();
    }

    // 5.4、sum加上进位
    sum += carry;

    // 5.5、更新进位变量carry的值
    carry = Math.floor(sum / 10);

    // 5.6、生成一个值为sum % 10(取出个位)的新节点，加到新链表中
    let newNode = new ListNode(sum % 10);

    // 5.7、已经新增了节点，需要新节点指向curr指针所占位的节点，然后把curr指针往前移到当前新节点处，
    //     占住这个新节点，便于后面新添加节点指向这个节点
    newNode.next = curr;
    curr = newNode;
  }

  // 6、新链表生成后，最后一位的运算可能还有进位，所以需要再判断一下：
  if (carry === 1) {
    let newNode = new ListNode(carry);
    newNode.next = curr;
    curr = newNode;
  }

  //   7、返回新链表
  return curr;
};
