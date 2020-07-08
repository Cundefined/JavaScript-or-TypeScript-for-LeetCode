# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第160题 )  相交链表**
       编写一个程序，找到两个单链表相交的起始节点。
如下面的两个链表：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200708110229648.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Nzc3MTA1Nw==,size_16,color_FFFFFF,t_70#pic_center)
在节点 c1 开始相交。​	  

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 创建两个指针p1、p2，分别指向两个链表头部
 

 2. 当p1、p2不相等时，说明指向的不是同一个节点，while循环判断：
 	2.1、如果p1为null说明第一个链表走完了，应该重新指向另一条链表的头部，再走一次
    2.2、否则还没走完的话就把p1往后移
    2.3、对p2进行一样的操作
 4. 循环结束，返回p1、p2任意一个即可

### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、创建两个指针p1、p2，分别指向两个链表头部
2、当p1、p2不相等时，说明指向的不是同一个节点，while循环判断：
    2.1、如果p1为null说明第一个链表走完了，应该重新指向另一条链表的头部，再走一次
    2.2、否则还没走完的话就把p1往后移
    2.3、对p2进行一样的操作
3、循环结束，返回p1、p2任意一个即可
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 1、创建两个指针p1、p2，分别指向两个链表头部
  let p1 = headA;
  let p2 = headB;

  // 2、当p1、p2不相等时，说明指向的不是同一个节点，while循环判断：
  while (p1 !== p2) {
    // 2.1、如果p1为null说明第一个链表走完了，应该重新指向另一条链表的头部，再走一次
    if (p1 === null) {
      p1 = headB;
    } else {
      // 2.2、否则还没走完的话就把p1往后移
      p1 = p1.next;
    }

    // 2.3、对p2进行一样的操作
    if (p2 === null) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
  }

  // 3、循环结束，返回p1、p2任意一个即可
  return p1;
};
```
