# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第876题 )  链表的中间结点**
       
给定一个带有头结点 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。


​	  **示例 1:**

```javascript
输入：[1,2,3,4,5]
输出：此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
```
**示例 2:**
```javascript
输入：[1,2,3,4,5,6]
输出：此列表中的结点 4 (序列化形式：[4,5,6])
由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/middle-of-the-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：链表题，玩指针
 1. 创建两个指针变量fast、slow，fast指针每次移动2位，slow指针每次移动1位，可以发现，fast指针移动的距离是slow指针的两倍，当fast指针移动到链表结尾时，slow指针肯定移到了中间位置，返回这个位置即为中间位置！！
**注意**：若链表有奇数个节点，当fast指针移动到链表结尾时（fast指向最后一个节点，即fast.next=== null )，slow指针肯定移到了中间位置若链表有偶数个节点，当fast指针移动到链表结尾时（fast会越过最后节点，指向最后的null，即fast===null），slow指针肯定移到了中间位置的后一个位置
 

 2. while循环遍历链表，当fast指针到了最后一个节点 或者 fast会越过最后节点，指向最后的null 就退出循环，否则一直循环：
 	2.1、移动fast指针
    2.2、移动slow指针
 3. 循环结束，返回slow指针指向的链表部分
 

### 2.1、JavaScript Solution

```javascript
/*
解题思路：链表题，玩指针
1、创建两个指针变量fast、slow，fast指针每次移动2位，slow指针每次移动1位，
   可以发现，fast指针移动的距离是slow指针的两倍，当fast指针移动到链表结尾时，
   slow指针肯定移到了中间位置，返回这个位置即为中间位置！！
注意：若链表有奇数个节点，当fast指针移动到链表结尾时（fast指向最后一个节点，即fast.next===null），slow指针肯定移到了中间位置
     若链表有偶数个节点，当fast指针移动到链表结尾时（fast会越过最后节点，指向最后的null，即fast===null），slow指针肯定移到了中间位置的后一个位置
2、while循环遍历链表，当fast指针到了最后一个节点 或者 fast会越过最后节点，指向最后的null 就退出循环，否则一直循环：
    2.1、移动fast指针
    2.2、移动slow指针
3、循环结束，返回slow指针指向的链表部分

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
var middleNode = function(head) {

  // 1、创建两个指针变量fast、slow，fast指针每次移动2位，slow指针每次移动1位
  let fast = head;
  let slow = head;

  // 2、while循环遍历链表，当fast指针到了最后一个节点 或者 fast会越过最后节点，指向最后的null 就退出循环，否则一直循环：
  while (fast !== null && fast.next !== null) {
    // 2.1、移动fast指针
    fast = fast.next.next;
    // 2.2、移动slow指针
    slow = slow.next;
  }

  // 3、循环结束，返回slow指针指向的链表部分
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

function middleNode(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    if (slow !== null) {
      slow = slow.next;
    }
  }

  return slow;
}
```

