# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第142题 )  环形链表 II**](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
     




## 2、解题思路
```javascript
方法：链表题，玩指针
类似于【141.Linked List Cycle】
1、边界条件为预判，如果输入为空链表，则返回null
2、创建两个指针，分别为快指针和慢指针，初始指向头部，快指针每次走两步
3、创建标志是否有环的变量
4、while循环，遍历链表，当快指针到最后一个节点或者倒数第二个节点时(奇偶)，停止循环，否则：
    4.1、快指针走两步
    4.2、慢指针走一步
    4.3、如果两个指针相遇时，说明有环，不用走了，跳出循环
5、循环结束，判断hasCycle，如果为false没环的话，直接返回null
6、否则，有环的话，将快指针放回开头位置，并且现在每次只走一步，直到和慢指针重新相遇
7、返回相遇的位置，即是链表尾连接到链表中的位置
```


### 2.1、JavaScript Solution

```javascript
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
var detectCycle = function (head) {
  // 1、边界条件为预判，如果输入为空链表，则返回null
  if (head === null) {
    return null;
  }

  //   2、创建两个指针，分别为快指针和慢指针，初始指向头部，快指针每次走两步
  let fast = head;
  let slow = head;

  // 3、创建标志是否有环的变量
  let hasCycle = false;

  // 4、while循环，遍历链表，当快指针到最后一个节点或者倒数第二个节点时(奇偶)，停止循环，否则：
  while (fast.next !== null && fast.next.next !== null) {
    // 4.1、快指针走两步
    fast = fast.next.next;
    // 4.2、慢指针走一步
    slow = slow.next;

    // 4.3、如果两个指针相遇时，说明有环，不用走了，跳出循环
    if (fast === slow) {
      hasCycle = true;
      break;
    }
  }

  // 5、循环结束，判断hasCycle，如果为false没环的话，直接返回null
  if (!hasCycle) {
    return null;
  }

  // 6、否则，有环的话，将快指针放回开头位置，并且现在每次只走一步，直到和慢指针重新相遇
  fast = head;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  //7、返回相遇的位置，即是链表尾连接到链表中的位置
  return fast;
};
```

