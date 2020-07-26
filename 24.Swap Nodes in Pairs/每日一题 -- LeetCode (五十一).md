# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第24题 )  两两交换链表中的节点**
       
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。


​	  **示例 :**

```javascript
给定 1->2->3->4, 你应该返回 2->1->4->3.
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

```javascript
解题思路：链表题，玩指针
1、创建假的零号节点，让其指向第一个节点，旨在方便交换第一个和第二个节点
2、创建三个指针，prev、n1、n2，让prev在最前面，初始化指向dummy节点,n1在prev后面，n2在n1后面
3、while循环遍历链表，当链表为偶数个节点，则当prev.next===null时，停止循环
   当链表为奇数个节点，最后剩下的那一个节点是不需要交换的，则当prev.next.next===null时，停止循环
   否则，循环六部曲：
   3.1、prev.next指向n2
   3.2、n1.next指向n2下一个节点
   3.3、n2.next指向n1
   3.4、prev移动到n1节点
   3.5、更新n1在prev后面
   3.6、更新n2在n1后面
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  // 1、创建假的零号节点，让其指向第一个节点，旨在方便交换第一个和第二个节点
  let dummyZeroNode = new ListNode();
  dummyZeroNode.next = head;

  // 2、创建三个指针，prev、n1、n2，让prev在最前面，初始化指向dummy节点
  let prev = dummyZeroNode;
  //   let n1 = prev.next;
  //   let n2 = prev.next.next;

  //   3、while循环遍历链表，当链表为偶数个节点，则当prev.next===null时，停止循环
  //    当链表为奇数个节点，最后剩下的那一个节点是不需要交换的，则当prev.next.next===null时，停止循环
  //    否则，循环六部曲：
  while (prev.next !== null && prev.next.next !== null) {
    let n1 = prev.next;
    let n2 = prev.next.next;
    prev.next = n2;

    n1.next = n2.next;

    n2.next = n1;

    prev = n1;

    // n1 = prev.next;

    // n2 = prev.next.next;
  }

  // 4、返回链表
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

function swapPairs(head: ListNode | null): ListNode | null {
    let dummyZeroNode: ListNode | null = new ListNode();
    dummyZeroNode.next = head;
  
    let prev: ListNode | null = dummyZeroNode;
  
    while (prev.next !== null && prev.next.next !== null) {
      let n1: ListNode | null = prev.next;
      let n2: ListNode | null = prev.next.next;
      prev.next = n2;
  
      n1.next = n2.next;
  
      n2.next = n1;
  
      prev = n1;
  
    }
  
    return dummyZeroNode.next;
};
```
### 2.3、Java Solution
```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode dummyZeroNode = new ListNode(0);
        dummyZeroNode.next = head;

        ListNode prev = dummyZeroNode;

        while (prev.next != null && prev.next.next != null) {
            ListNode n1 = prev.next;

            ListNode n2 = prev.next.next;

            prev.next = n2;

            n1.next = n2.next;

            n2.next = n1;

            prev = n1;
        }

        return dummyZeroNode.next;

        
    }
}
```

