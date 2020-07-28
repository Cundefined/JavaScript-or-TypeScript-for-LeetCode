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