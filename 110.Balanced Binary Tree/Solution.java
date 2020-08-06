/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }
        if (calculateTreeHeight(root) == -1) {
            return false;
        }

        return true;

    }

    private int calculateTreeHeight(TreeNode currTreeNode) {
        if (currTreeNode == null) {
            return 0;
        }

        int leftNodeHeight = calculateTreeHeight(currTreeNode.left);
        int rightNodeHeight = calculateTreeHeight(currTreeNode.right);

        if (leftNodeHeight == -1 || rightNodeHeight == -1) {
            return -1;
        }

        if (Math.abs(leftNodeHeight - rightNodeHeight) > 1) {
            return -1;
        } 

        return Math.max(leftNodeHeight, rightNodeHeight) + 1;



    }
}