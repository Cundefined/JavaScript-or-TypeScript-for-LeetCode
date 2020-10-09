/*
解题思路：
利用map字典存储原链表节点和新链表节点的对应关系：
    键为原链表节点，值为新链表节点
注意：1、原链表节点与复制的新链表节点【val值要一样】 -- 复制节点值
     2、新链表节点要把原链表节点的指向关系一同复制过来 -- 复制节点之间关系
       【next、random指向可以通过map存储的关系来获取】
*/
/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/
class Solution {
    public Node copyRandomList(Node head) {
        HashMap<Node, Node> map = new HashMap<>();

        Node cur = head;

        //遍历原链表，键为原链表节点，值为新链表节点
        while (cur != null) {
            map.put(cur, new Node(cur.val));
            cur = cur.next;
        }

        //指针移动回到链表头部，重新遍历原链表，复制节点之间关系
        cur = head;
        while (cur != null) {
            //复制节点之间关系 -- .next  .random
            map.get(cur).next = map.get(cur.next);
            map.get(cur).random = map.get(cur.random);
        
            cur = cur.next;
        }

        return map.get(head);


    }
}