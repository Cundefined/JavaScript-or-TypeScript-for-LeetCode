# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第92题 )  反转链表 II**
       反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

**说明:**
1 ≤ m ≤ n ≤ 链表长度。

​**示例 :**

```javascript
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：链表题、玩指针
 1. 按照206题反转链表，创建三个指针prev、curr、next，但是此题需要额外的两个指针来占住m位置和m之前的位置
 

 2. for循环，把prev、curr、next快进到m位置附件
 3. 创建额外的两个指针beforeM、currM来占住m之前和m位置的位置
 4. for循环，在m到n之间进行反转四部曲：
 	4.1、next=curr.next,先用next占住下一个节点，这样即使断开和下一节点的连接，也能通过next指针，找到它
    4.2、curr.next=prev,把当前节点指向前一个节点
    4.3、prev=curr,前一个节点指针移到当前节点
    4.4、curr=next,当前节点指针移到下一个节点
 5. 反转m到n节点完成后，需要和剩余的未反转的节点拼接起来
 	5.1、如果beforeM为null，说明m位置为第一个节点，那就不能利用beforeM.next去指向最后的prev指向的n位置，此时应该直接让head指向prev位置即可
    5.2、如果beforeM不为null，说明m位置不是开头第一个节点，直接beforeM.next去指向最后的prev指向的n位置即可

 6. currM.next指向n后面的curr指向的节点，完成全部拼接
 7. 返回head

### 2.1、JavaScript Solution

```javascript
/*
解题思路：链表题、玩指针
1、按照206题反转链表，创建三个指针prev、curr、next，但是此题需要额外的两个指针来占住m位置和m之前的位置
2、for循环，把prev、curr、next快进到m位置附件
3、创建额外的两个指针beforeM、currM来占住m之前和m位置的位置
4、for循环，在m到n之间进行反转四部曲：
    4.1、next=curr.next,先用next占住下一个节点，这样即使断开和下一节点的连接，也能通过next指针，找到它
    4.2、curr.next=prev,把当前节点指向前一个节点
    4.3、prev=curr,前一个节点指针移到当前节点
    4.4、curr=next,当前节点指针移到下一个节点
5、反转m到n节点完成后，需要和剩余的未反转的节点拼接起来
    5.1、如果beforeM为null，说明m位置为第一个节点，那就不能利用beforeM.next去指向最后的prev指向的n位置，此时应该直接让head指向prev位置即可
    5.2、如果beforeM不为null，说明m位置不是开头第一个节点，直接beforeM.next去指向最后的prev指向的n位置即可
6、currM.next指向n后面的curr指向的节点，完成全部拼接
7、返回head
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  // 1、按照206题反转链表，创建三个指针prev、curr、next，但是此题需要额外的两个指针来占住m位置和m之前的位置
  let prev = null;
  let curr = head;
  let next = head;

  // 2、for循环，把prev、curr、next快进到m位置
  for (let i = 1; i < m; i++) {
    prev = curr;
    curr = curr.next;
    next = curr;
  }

  // 3、创建额外的两个指针beforeM、currM来占住m之前和m位置的位置
  let beforeM = prev;
  let currM = curr;

  // 4、for循环，在m到n之间进行反转四部曲：
  for (let i = m; i <= n; i++) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // 5、反转m到n节点完成后，需要和剩余的未反转的节点拼接起来
  if (beforeM === null) {
    head = prev;
  } else {
    beforeM.next = prev;
  }

  // 6、currM指向n后面的curr指向的节点，完成全部拼接
  currM.next = curr;

  // 7、返回head
  return head;
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

function reverseBetween(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  let next: ListNode | null = head;

  for (let i: number = 1; i < m; i++) {
    if (curr !== null) {
      prev = curr;
      curr = curr.next;
      next = curr;
    }
  }

  let beforeM: ListNode | null = prev;
  let currM: ListNode | null = curr;

  for (let i: number = m; i <= n; i++) {
    if (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  }

  if (beforeM === null) {
    head = prev;
  } else {
    beforeM.next = prev;
  }

  if (currM !== null) {
    currM.next = curr;
  }

  return head;
}
```

