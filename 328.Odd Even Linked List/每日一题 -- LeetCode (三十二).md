# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第328题 )  奇偶链表**
      
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。




​	  **示例 1:**

```javascript
输入: 1->2->3->4->5->NULL
输出: 1->3->5->2->4->NULL
```
**示例 2:**
```javascript
输入: 2->1->3->5->6->4->7->NULL 
输出: 2->3->6->7->1->5->4->NULL
```
**说明:**

 - 应当保持奇数节点和偶数节点的相对顺序。 
 - 链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/odd-even-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：链表题，玩指针
 1. 边界条件预判
 	1.1、如果给定链表为空，返回null
    1.2、如果给定链表只有一个节点，返回当前链表
 
 2. 创建两个指针，odd指向奇数位置，even指向偶数位置，初始化分别指向第一个和第二个节点

 	
 3. 创建一个占位指针，占住第一个偶数位置，之后需要把奇数的结尾指向这个位置，从而形成最后的奇偶链表
 	

 4. while循环，如果even到达null或者到达最后一个节点，就停止循环，否则，继续循环：
 	4.1、先把odd指向的当前节点连接到下一个奇数位置
    4.2、再利用当前连接，把odd指针指向刚刚连接到的奇数节点
    4.3、先把even指向的当前节点连接到下一个偶数位置
    4.4、再利用当前连接，把even指针指向刚刚连接到的偶数节点
   

 5. 循环结束后，所有奇数节点连起来了，偶数节点也连起来了，现在需要把最后一个奇数节点，连接到之前占好的第一个偶数节点位置
 6. 返回整个链表

### 2.1、JavaScript Solution

```javascript
/*
解题思路：链表题，玩指针
1、边界条件预判
    1.1、如果给定链表为空，返回null
    1.2、如果给定链表只有一个节点，返回当前链表
2、创建两个指针，odd指向奇数位置，even指向偶数位置，初始化分别指向第一个和第二个节点
3、创建一个占位指针，占住第一个偶数位置，之后需要把奇数的结尾指向这个位置，从而形成最后的奇偶链表
4、while循环，如果even到达null或者到达最后一个节点，就停止循环，否则，继续循环：
    4.1、先把odd指向的当前节点连接到下一个奇数位置
    4.2、再利用当前连接，把odd指针指向刚刚连接到的奇数节点
    4.3、先把even指向的当前节点连接到下一个偶数位置
    4.4、再利用当前连接，把even指针指向刚刚连接到的偶数节点
5、循环结束后，所有奇数节点连起来了，偶数节点也连起来了，现在需要把最后一个奇数节点，连接到之前占好的第一个偶数节点位置
6、返回整个链表
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  // 1、边界条件预判
  //   1.1、如果给定链表为空，返回null
  if (head === null) {
    return null;
  }
  //   1.2、如果给定链表只有一个节点，返回当前链表
  if (head.next === null) {
    return head;
  }

  // 2、创建两个指针，odd指向奇数位置，even指向偶数位置，初始化分别指向第一个和第二个节点
  let odd = head;
  let even = head.next;

  // 3、创建一个占位指针，占住第一个偶数位置，之后需要把奇数的结尾指向这个位置，从而形成最后的奇偶链表
  let firstEvenNode = head.next;

  // 4、while循环，如果even到达null或者到达最后一个节点，就停止循环，否则，继续循环：
  while (even !== null && even.next !== null) {
    // 4.1、先把odd指向的当前节点连接到下一个奇数位置
    odd.next = odd.next.next;

    // 4.2、再利用当前连接，把odd指针指向刚刚连接到的奇数节点
    odd = odd.next;

    // 4.3、先把even指向的当前节点连接到下一个偶数位置
    even.next = even.next.next;

    // 4.4、再利用当前连接，把even指针指向刚刚连接到的偶数节点
    even = even.next;
  }

  // 5、循环结束后，所有奇数节点连起来了，偶数节点也连起来了，现在需要把最后一个奇数节点，连接到之前占好的第一个偶数节点位置
  odd.next = firstEvenNode;

  // 6、返回整个链表
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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    if (head.next === null) {
        return head;
    }

    let odd: ListNode | null = head;
    let even: ListNode | null = head.next;

    let firstEvenNode: ListNode | null = head.next;

    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }

    odd.next = firstEvenNode;

    return head;
};
```

