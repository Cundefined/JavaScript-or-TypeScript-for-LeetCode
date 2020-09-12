# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 06 )  从尾到头打印链表**](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)
       




## 2、解题思路
```javascript
解题思路：
1、遍历一遍链表，记录其长度
2、以其长度，创建一个等长度的数组
3、从数组最后位置依次加入链表节点值
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
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (head === null) {
    return [];
  }
  let len = 0;
  let curr = head;
  while (curr !== null) {
    len++;
    curr = curr.next;
  }

  const res = new Array(len);

  curr = head;

  let i = len - 1;

  while (curr !== null) {
    res[i--] = curr.val;
    curr = curr.next;
  }

  return res;
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

function reversePrint(head: ListNode | null): number[] {
  if (head === null) {
    return [];
  }
  let len: number = 0;
  let curr: ListNode | null = head;
  while (curr !== null) {
    len++;
    curr = curr.next;
  }

  const res: number[] = new Array(len);

  curr = head;

  let i: number = len - 1;

  while (curr !== null) {
    res[i--] = curr.val;
    curr = curr.next;
  }

  return res;
}
```

