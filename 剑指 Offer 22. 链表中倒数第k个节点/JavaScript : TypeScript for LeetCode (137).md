# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 22 )  链表中倒数第k个节点**](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)
      


## 2、解题思路
**方法：链表题，玩指针**
```javascript
1、创建两个指针fast、slow，初始化指向head
2、for循环将fast往前移动k个节点，以此来和slow隔开长度为k的距离
3、while循环移动fast和slow指针，当fast到达最后一个节点时，
slow就会相应到达倒数第k个节点（因为fast和slow相隔n的距离）
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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  // 1、创建两个指针fast、slow，初始化指向head
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  // 2、for循环将fast往前移动k个节点，以此来和slow隔开长度为k的距离
  for (let i: number = 0; i < k; i++) {
    fast = fast && fast.next;
  }

  //3、while循环移动fast和slow指针，当fast到达最后一个节点时，
  //   slow就会相应到达倒数第k个节点（因为fast和slow相隔n的距离）
  while (fast !== null) {
    fast = fast && fast.next;
    slow = slow && slow.next;
  }

  return slow;
}

```

