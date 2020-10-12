# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode -- 第530题 )  二叉搜索树的最小绝对差**](https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/)
      


## 2、解题思路
**方法：中序遍历**
```javascript
注意：
二叉搜索树的中序遍历是升序的结果，故最小的绝对值差一定会是两个相邻的节点之差！！！
    1、在中序遍历时一边遍历一边比较
    2、利用preNode记录当前节点的前一个节点，这样才能和他比较
       这样就不用新建数组来保存中序的结果之后再做比较了，优化挺多
```


### 2.1、Java Solution

```java
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
    private TreeNode preNode = null;
    private int min = Integer.MAX_VALUE;
    public int getMinimumDifference(TreeNode root) {
        inOrder(root);
        return min;
    }

        // 中序遍历递归函数
    private void inOrder(TreeNode root) {
        //递归终止条件
        //到叶子节点就结束遍历
        if (root == null) {
            return;
        }
    
        inOrder(root.left);
    
        //处理当前节点 -- 与前一节点比较
        if (preNode != null) {
            min = Math.min(min, root.val - preNode.val);
        }
    
        //更新preNode
        preNode = root;
    
        inOrder(root.right);
    }
    
}
```

