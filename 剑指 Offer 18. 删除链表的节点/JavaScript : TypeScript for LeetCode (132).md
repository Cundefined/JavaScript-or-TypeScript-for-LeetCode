# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 18 )  删除链表的节点**](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)
      


## 2、解题思路
**方法：链表题，玩指针**
```javascript
1、边界条件预判
2、创建两个个指针，初始指向头部（prev指针方便删除节点）
3、while循环遍历链表，找到就删除节点，并移除循环
4、返回链表
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
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  //1、边界条件预判
  if (head.val === val) {
    return head.next;
  }
  //2、创建两个个指针，初始指向头部（prev指针方便删除节点）
  let curr = head;
  let prev = head;

  //3、while循环遍历链表，找到就删除节点，并移除循环
  while (curr !== null) {
    curr = curr.next;
    if (curr.val === val) {
      prev.next = curr.next;
      break;
    }
    prev = prev.next;
  }
  //4、返回链表
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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  //1、边界条件预判
  if (head && head.val === val) {
    return head.next;
  }
  //2、创建两个个指针，初始指向头部（prev指针方便删除节点）
  let curr: ListNode | null = head;
  let prev: ListNode | null = head;

  //3、while循环遍历链表，找到就删除节点，并移除循环
  while (curr !== null) {
    curr = curr.next;
    if (curr && curr.val === val) {
      prev && (prev.next = curr.next);
      break;
    }
    prev && (prev = prev.next);
  }
  //4、返回链表
  return head;
}
```

