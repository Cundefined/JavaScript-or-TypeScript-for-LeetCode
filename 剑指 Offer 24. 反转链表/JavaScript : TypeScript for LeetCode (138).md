﻿# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 24 )  反转链表**](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/)
      


## 2、解题思路
**方法：链表题，玩指针**
```javascript
1、创建三个指针prev、curr、next
2、循环四部曲：
    2.1、next=curr.next,先用next占住下一个节点，这样即使断开和下一节点的连接，也能通过next指针，找到它
    2.2、curr.next=prev,把当前节点指向前一个节点
    2.3、prev=curr,前一个节点指针移到当前节点
    2.4、curr=next,当前节点指针移到下一个节点
3、循环遍历到curr为null，即走完了链表，返回prev指向的节后，即最后一个节点，也是反转链表的head
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
var reverseList = function (head) {
  // 1、创建三个指针prev、curr、next
  let prev = null;
  let curr = head;
  let next = head;

  // 链表没走完的话，就一直往后挪
  // 2、循环四部曲：
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // 3、循环遍历到curr为null，即走完了链表，返回prev指向的节后，即最后一个节点，也是反转链表的head
  return prev;
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

function reverseList(head: ListNode | null): ListNode | null {
  // 1、创建三个指针prev、curr、next
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  let next: ListNode | null = head;

  // 链表没走完的话，就一直往后挪
  // 2、循环四部曲：
  while (curr !== null) {
    next = curr && curr.next;
    curr && (curr.next = prev);
    prev = curr;
    curr = next;
  }

  // 3、循环遍历到curr为null，即走完了链表，返回prev指向的节后，即最后一个节点，也是反转链表的head
  return prev;
}

```

