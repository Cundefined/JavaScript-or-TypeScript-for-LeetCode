# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1be411s7an?t=674***

## 1、题目要求
**( LeetCode-第445题 )  两数相加 II**
       

给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

 

**进阶：**

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。




 **示例 :**

```javascript
输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 8 -> 0 -> 7
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：链表题，玩指针 【参考：2.Add Two Numbers】
**注意**：此题和第2题的区别在于，高位在链表头部，低位在链表尾部，而链表只能由前向后依次遍历，即不能先计算低位，所以需要创建“栈”，先进后出，从而达到反转链表的效果
```javascript
1、创建两个栈，分别存放两个链表的节点值
2、分别while循环，把两个链表的节点值push进各自的栈
3、创建curr指针，初始指向null，即指向新链表的“尾部”，因为后续要从尾部往前拼接链表
4、创建一个carry变量，表示目前运算是否需要进位，初始化为0
5、while循环，遍历两个栈，只有两个栈都遍历完了才退出循环，否则，继续遍历：
    5.1、创建保存”位运算和“的变量，初始化为0
    5.2、如果stack1元素还没pop完，就pop出栈顶的元素，加进sum
    5.3、如果stack2元素还没pop完，就pop出栈顶的元素，加进sum
    5.4、sum加上进位
    5.5、更新进位变量carry的值
    5.6、生成一个值为sum % 10(取出个位)的新节点，加到新链表中
    5.7、已经新增了节点，需要新节点指向curr指针所占位的节点，然后把curr指针往前移到当前新节点处，
        占住这个新节点，便于后面新添加节点指向这个节点
6、新链表生成后，最后一位的运算可能还有进位，所以需要再判断一下：
    6.1、如果carry变量为1，说明还有进位，需要新增一个值为carry的节点
7、返回新链表
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
var addTwoNumbers = function (l1, l2) {
  // 1、创建两个栈，分别存放两个链表的节点值
  let stack1 = [];
  let stack2 = [];

  // 2、分别while循环，把两个链表的节点值push进各自的栈
  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  // 3、创建curr指针，初始指向null，即指向新链表的“尾部”，因为后续要从尾部往前拼接链表
  let curr = null;

  // 4、创建一个carry变量，表示目前运算是否需要进位，初始化为0
  let carry = 0;

  // 5、while循环，遍历两个栈，只有两个栈都遍历完了才退出循环，否则，继续遍历：
  while (stack1.length !== 0 || stack2.length !== 0) {
    // 5.1、创建保存”位运算和“的变量，初始化为0
    let sum = 0;

    // 5.2、如果stack1元素还没pop完，就pop出栈顶的元素，加进sum
    if (stack1.length !== 0) {
      sum += stack1.pop();
    }

    // 5.3、如果stack2元素还没pop完，就pop出栈顶的元素，加进sum
    if (stack2.length !== 0) {
      sum += stack2.pop();
    }

    // 5.4、sum加上进位
    sum += carry;

    // 5.5、更新进位变量carry的值
    carry = Math.floor(sum / 10);

    // 5.6、生成一个值为sum % 10(取出个位)的新节点，加到新链表中
    let newNode = new ListNode(sum % 10);

    // 5.7、已经新增了节点，需要新节点指向curr指针所占位的节点，然后把curr指针往前移到当前新节点处，
    //     占住这个新节点，便于后面新添加节点指向这个节点
    newNode.next = curr;
    curr = newNode;
  }

  // 6、新链表生成后，最后一位的运算可能还有进位，所以需要再判断一下：
  if (carry === 1) {
    let newNode = new ListNode(carry);
    newNode.next = curr;
    curr = newNode;
  }

  //   7、返回新链表
  return curr;
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let stack1: Array<number> = [];
  let stack2: Array<number> = [];

  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let curr: ListNode | null = null;

  let carry: number = 0;

  while (stack1.length !== 0 || stack2.length !== 0) {
    let sum: number = 0;

    if (stack1.length !== 0) {
      sum += stack1.pop();
    }

    if (stack2.length !== 0) {
      sum += stack2.pop();
    }

    sum += carry;

    carry = Math.floor(sum / 10);

    let newNode: ListNode | null = new ListNode(sum % 10);

    newNode.next = curr;
    curr = newNode;
  }

  if (carry === 1) {
    let newNode: ListNode | null = new ListNode(carry);
    newNode.next = curr;
    curr = newNode;
  }

  return curr;
}
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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Stack<Integer> stack1 = new Stack<>();
        Stack<Integer> stack2 = new Stack<>();

        while (l1 != null) {
            stack1.push(l1.val);
            l1 = l1.next;
        }

        while (l2 != null) {
            stack2.push(l2.val);
            l2 = l2.next;
        }

        ListNode curr = null;

        int carry = 0;

        while (!stack1.isEmpty() || !stack2.isEmpty()) {
            int sum = 0;

            if (!stack1.isEmpty()) {
                sum += stack1.pop();
            }

            if (!stack2.isEmpty()) {
                sum += stack2.pop();
            }

            sum += carry;
            
            carry = sum / 10;

            ListNode newNode = new ListNode(sum % 10);

            newNode.next = curr;

            curr = newNode;

        }

        if (carry == 1) {
            ListNode newNode = new ListNode(carry);

            newNode.next = curr;

            curr = newNode;
        }

        return curr;
    }
}
```

