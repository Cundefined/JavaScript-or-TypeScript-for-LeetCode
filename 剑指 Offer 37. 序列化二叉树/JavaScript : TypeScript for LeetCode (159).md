# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 37 )  序列化二叉树**](https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/)
      


## 2、解题思路
**方法：广度优先搜索（层序遍历）**
```javascript
序列化：
    1、标准的层序遍历模板，维持一个队列
    2、返回指定的字符串形式的结果
反序列化：
也是层序遍历的思想，维持一个队列
    1、由序列化的结果可知当前元素的父节点肯定在它前面
    2、因此，需要提前判断当前元素是其前面节点的左孩子还是有孩子
    3、这样，才能方便的连接节点
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
public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder res = new StringBuilder("[");
        Queue<TreeNode> queue = new LinkedList();

        queue.add(root);

        while(!queue.isEmpty()) {
            TreeNode currNode = queue.remove();
            if(currNode == null) {
                res.append("null,");
            } else {
                res.append(currNode.val + ",");
                //左右孩子入队
                queue.add(currNode.left);
                queue.add(currNode.right);
            }
        }

        //去掉最后面多出来的一个逗号
        res.setLength(res.length() - 1);
        //追加右中括号，闭合树
        res.append("]");

        return res.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        String[] treeNodeArr = data.substring(1, data.length() - 1).split(",");
        //取出第一个元素，即根节点
        TreeNode root = char2Node(treeNodeArr[0]);

        //维护一个队列，记录当前节点的父亲
        Queue<TreeNode> parentNodeQueue = new LinkedList();

        //初始化把当前节点加入父亲队列
        parentNodeQueue.add(root);

        //标记当前节点是否为左孩子
        boolean isLeftSubTreeNode = true;

        TreeNode currParent = null;
        for (int i = 1; i < treeNodeArr.length; i++) {
            TreeNode currNode = char2Node(treeNodeArr[i]);
            //碰到左孩子就父亲出队，因为碰到左孩子就会出现新的一层
            if (isLeftSubTreeNode) {
                currParent = parentNodeQueue.peek();
                parentNodeQueue.poll();
            }
        
            if (currNode != null) {
                // 先把当前节点存入父亲节点的队列中，供后面的孩子节点使用，方便他们找到自己的父亲
                parentNodeQueue.add(currNode);
            }
        
            //判断当前节点是其父亲的左孩子还是右孩子，并连接好
            if (isLeftSubTreeNode) {
                currParent.left = currNode;
            } else {
                currParent.right = currNode;
            }
        
            //更新标志
            isLeftSubTreeNode = !isLeftSubTreeNode;

        }

        return root;
    }

    //创建字符转为树节点的函数
    private TreeNode char2Node(String c) {
        if (c.equals("null")) {
            return null;
        }
    
        return new TreeNode(Integer.valueOf(c));
  }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
```

