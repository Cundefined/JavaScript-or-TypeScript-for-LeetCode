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