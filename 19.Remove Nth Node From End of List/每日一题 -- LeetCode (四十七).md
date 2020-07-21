# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第19题 )  删除链表的倒数第N个节点**
       
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。


​	  **示例 :**

```javascript
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```
**说明：**

给定的 n 保证是有效的。

**进阶：**

你能尝试使用一趟扫描实现吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：链表题，玩指针
 1. 创建假的零号节点dummyZeroNode，旨在防止只有一个节点且需要删除该节点时，无法站在它前一个节点来删除它
 

 2. 创建两个指针n1和n2，初始化都指向dummyZeroNode节点
 	
 3. for循环将n2往前移动n个节点，以此来和n1隔开长度为n的距离
 	
 4. while循环移动n1和n2指针，当n2到达最后一个节点时，n1就会相应到达要删除的节点的前一个节点位置（因为n1和n2相隔n的距离）
 5. 循环结束后，将n1节点指向下下个节点，即可绕过要删除的节点，完成删除
 6. 返回链表

### 2.1、JavaScript Solution

```javascript
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
```


### 2.2、TypeScript Solution

```javascript
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyZeroNode: ListNode = new ListNode();
  dummyZeroNode.next = head;

  let n1: ListNode = dummyZeroNode;
  let n2: ListNode = dummyZeroNode;

  for (let i: number = 0; i < n; i++) {
    n2 = n2.next;
  }

  while (n2.next !== null) {
    n1 = n1.next;
    n2 = n2.next;
  }

  n1.next = n1.next.next;

  return dummyZeroNode.next;
}

```

