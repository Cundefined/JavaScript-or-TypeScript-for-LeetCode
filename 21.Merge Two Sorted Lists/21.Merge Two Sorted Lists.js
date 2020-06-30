/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 解题思路：
 * 1、利用ListNode(val, next)函数创建新有序链表的第一个空节点
 * 2、保存当前节点指向的初始位置，方便后续返回结果直接找到开头位置
 * 3、while循环比较输入的两个链表的值，循环条件是两个链表都还没走完（即走到了最后一个节点null），只要有一个走完了就停止循环比较：
 *      3.1、判断比较l1的当前节点值和l2的当前节点值：   
 *             3.1.1、哪个值小就把哪个节点加入到新链表中，类似于数组push()
 *             3.1.2、并且移动到下一个节点，类似于数组索引i++
 *      3.2、成功添加一个新节点后，需要把新链表的指针位置往后移动一个节点
 * 4、若循环停止，有可能是全部比较完成了，两个节点都走完了，也有可能是有一个节点提前走完了，此时还有一个节点没走完，说明此链表剩下的节点值都是较大的值，直接整体接在新链表的后面就行，即此时if判断，谁不为空，谁就整体加入新链表
 * 5、返回结果，注意：要返回head.next (head.next就是指向新的链表第一个真实节点)
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 1、利用ListNode(val, next)函数创建新有序链表的第一个空节点
    let newListHead = new ListNode(); 

    // 2、保存当前节点指向的初始位置，方便后续返回结果直接找到开头位置
    let head = newListHead;

    //  3、while循环比较输入的两个链表的值，循环条件是两个链表都还没走完（即走到了最后一个节点null），只要有一个走完了就停止循环比较：
    while (l1 !== null && l2 !== null) {
        // 3.1、判断比较l1的当前节点值和l2的当前节点值： 
        if (l1.val < l2.val) {
            // 3.1.1、哪个值小就把哪个节点加入到新链表中，类似于数组push()
            // 让newListHead指向值较小的节点
            newListHead.next = l1;
            //  3.1.2、并且移动到下一个节点，类似于数组索引i++
            l1 = l1.next;

        } else {
            newListHead.next = l2;
            l2 = l2.next;
        }
        // 3.2、成功添加一个新节点后，需要把新链表的指针位置往后移动一个节点
        newListHead = newListHead.next;
    }

    // 4、若循环停止，有可能是全部比较完成了，两个节点都走完了，也有可能是有一个节点提前走完了，此时还有一个节点没走完，说明此链表剩下的节点值都是较大的值，直接整体接在新链表的后面就行，即此时if判断，谁不为空，谁就整体加入新链表
    if (l1 !== null) {
        newListHead.next = l1;
    }

    if (l2 !== null) {
        newListHead.next = l2;
    }

    // 5、返回结果，注意：要返回head.next (head.next就是指向新的链表第一个真实节点)
    return head.next
};