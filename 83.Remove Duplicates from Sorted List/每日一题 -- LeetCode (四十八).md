# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第83题 )  删除排序链表中的重复元素**
       
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。


​	  **示例 1:**

```javascript
输入: 1->1->2
输出: 1->2
```
**示例 2:**
```javascript
输入: 1->1->2->3->3
输出: 1->2->3
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：链表题，玩指针
 1. 边界条件预判，如果给定的是空链表或者只有一个节点，则直接返回该空链表
 

 2. 创建指针，初始化指向链表头部
 	
 3. while循环，当指针走到链表最后一个节点时，就停止，否则：
 	3.1、判断如果当前节点的值等于下一节点的值，说明是重复节点，应删除该下一节点
    3.2、否则，指针正常后移
 5. 循环结束，返回链表

### 2.1、JavaScript Solution

```javascript
/*
解题思路：链表题，玩指针
1、边界条件预判，如果给定的是空链表或者只有一个节点，则直接返回该空链表
2、创建指针，初始化指向链表头部
3、while循环，当指针走到链表最后一个节点时，就停止，否则：
    3.1、判断如果当前节点的值等于下一节点的值，说明是重复节点，应删除该下一节点
    3.2、否则，指针正常后移
4、循环结束，返回链表
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 1、边界条件预判，如果给定的是空链表或者只有一个节点，则直接返回该空链表
  if (head === null) {
    return head;
  }

  if (head.next === null) {
    return head;
  }

  // 2、创建指针，初始化指向链表头部
  let current = head;

  //   3、while循环，当指针走到链表最后一个节点时，就停止，否则：
  while (current.next !== null) {
    // 3.1、判断如果当前节点的值等于下一节点的值，说明是重复节点，应删除该下一节点
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      // 3.2、否则，指针正常后移
      current = current.next;
    }
  }

  // 4、循环结束，返回链表
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }

  if (head.next === null) {
    return head;
  }

  let current: ListNode = head;

  while (current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

```

