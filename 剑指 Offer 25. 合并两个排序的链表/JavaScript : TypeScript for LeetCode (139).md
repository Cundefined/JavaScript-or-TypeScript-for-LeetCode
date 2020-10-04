# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 25 )  合并两个排序的链表**](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)
      


## 2、解题思路
**方法：链表题，玩指针**
```javascript
 * 1、利用ListNode(val, next)函数创建新有序链表的第一个空节点
 * 2、保存当前节点指向的初始位置，方便后续返回结果直接找到开头位置
 * 3、while循环比较输入的两个链表的值，循环条件是两个链表都还没走完（即走到了最后一个节点null），只要有一个走完了就停止循环比较：
 *      3.1、判断比较l1的当前节点值和l2的当前节点值：   
 *             3.1.1、哪个值小就把哪个节点加入到新链表中，类似于数组push()
 *             3.1.2、并且移动到下一个节点，类似于数组索引i++
 *      3.2、成功添加一个新节点后，需要把新链表的指针位置往后移动一个节点
 * 4、若循环停止，有可能是全部比较完成了，两个节点都走完了，也有可能是有一个节点提前走完了，此时还有一个节点没走完，说明此链表剩下的节点值都是较大的值，直接整体接在新链表的后面就行，即此时if判断，谁不为空，谁就整体加入新链表
 * 5、返回结果，注意：要返回dummy.next (dummy.next就是指向新的链表第一个真实节点)
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    const dummy = new ListNode(0);
    let dummyCurr = dummy;

    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            dummyCurr.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            dummyCurr.next = new ListNode(l2.val);
            l2 = l2.next; 
        }
        dummyCurr = dummyCurr.next;
        
    }
    if (l1 !== null) {
        dummyCurr.next = l1;
    }   
    if (l2 !== null) {
        dummyCurr.next = l2;
    }  


    return dummy.next;
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

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy: ListNode | null = new ListNode(0);
  let dummyCurr: ListNode | null = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      dummyCurr.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      dummyCurr.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    dummyCurr = dummyCurr.next;
  }
  if (l1 !== null) {
    dummyCurr.next = l1;
  }
  if (l2 !== null) {
    dummyCurr.next = l2;
  }

  return dummy.next;
}
```

