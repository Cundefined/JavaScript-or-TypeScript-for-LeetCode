# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第141题 )  环形链表**
       

给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。




 **示例 1:**

```javascript
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

```javascript
1、边界条件为预判，如果输入为空链表，则返回-1
2、创建两个指针，分别为快指针和慢指针，初始指向头部，快指针每次走两步
3、while循环，遍历链表，当快指针到最后一个节点或者倒数第二个节点时，停止循环，否则：
    3.1、慢指针走一步
    3.2、快指针走两步
    3.3、如果两个指针相遇时，说明有环，返回true
4、循环结束都没返回的话，说明没环，返回false
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 1、边界条件为预判，如果输入为空链表，则返回-1
  if (head === null) {
    return false;
  }

  // 2、创建两个指针，分别为快指针和慢指针，初始指向头部，快指针每次走两步
  let fast = head;
  let slow = head;

  // 3、while循环，遍历链表，当快指   针到最后一个节点或者倒数第二个节点时，停止循环，否则：
  while (fast.next !== null && fast.next.next !== null) {
    // 3.1、慢指针走一步
    slow = slow.next;
    // 3.2、快指针走两步
    fast = fast.next.next;
    // 3.3、如果两个指针相遇时，说明有环，返回true
    if (slow === fast) {
      return true;
    }
  }

  // 4、循环结束都没返回的话，说明没环，返回false
  return false;
};
```


### 2.2、Java Solution
```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if (head == null) {
            return false;
        }

        ListNode fast = head;
        ListNode slow = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow.val == fast.val) {
                return true;
            }
        }

        return false;

    }
}
```

