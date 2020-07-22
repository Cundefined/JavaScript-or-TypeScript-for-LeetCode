# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第104题 )  二叉树的最大深度**
       
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。







 **示例 :**
给定二叉树 [3,9,20,null,null,15,7]，
```javascript
  3
   / \
  9  20
    /  \
   15   7
```
返回它的最大深度 3 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：方法一：递归
```javascript
1、递归函数maxDepth()的定义：maxDepth(root)，返回从该根节点开始的二叉树最大深度
2、递归函数的出口条件：当给定root节点不存在时，说明到树底了，返回0
3、否则当root节点存在时，那么说明该二叉树深度至少为1，则应该返回1+Math.max(maxDepth(root.left),maxDepth(root.right))
```
解题思路：方法二：BFS-广度优先搜索（每遍历一行，就把深度加一）
```javascript
1、边界条件预判：
  1.1、若根节点不存在，则返回深度为0
  1.2、若只有根节点一个节点，则返回深度为1
2、创建一个队列（js用数组来模拟），存放一行节点，并且在队尾补加null来标识该行已被遍历完（遍历发现null时，说明已经遍历完一行了）
3、创建两个变量，queueFirstElement记录移除的队头元素，用于循环判断，maxTreeDepth记录数深度
4、while循环，当队列中元素还没移除完时，遍历判断该队列元素：
  4.1、当移除的元素为null时，说明已经遍历了一行节点，此时如果队列为空，说明后续没有子节点了，返回maxTreeDepth
  4.2、否则，maxTreeDepth加一，并且往队尾补加null标志下一行
  4.3、若当前行还没遍历完，并且左右子节点存在的话，就把左右子节点加入队列
```

### 2.1、JavaScript Solution
**方法一**
```javascript
/*
解题思路：方法一：递归
1、递归函数maxDepth()的定义：maxDepth(root)，返回从该根节点开始的二叉树最大深度
2、递归函数的出口条件：当给定root节点不存在时，说明到树底了，返回0
3、否则当root节点存在时，那么说明该二叉树深度至少为1，则应该返回1+Math.max(maxDepth(root.left),maxDepth(root.right))
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  let maxTreeDepth = 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  return maxTreeDepth;
};

```
**方法二**
```javascript
/*
解题思路：方法二：BFS-广度优先搜索（每遍历一行，就把深度加一）
1、边界条件预判：
  1.1、若根节点不存在，则返回深度为0
  1.2、若只有根节点一个节点，则返回深度为1
2、创建一个队列（js用数组来模拟），存放一行节点，并且在队尾补加null来标识该行已被遍历完（遍历发现null时，说明已经遍历完一行了）
3、创建两个变量，queueFirstElement记录移除的队头元素，用于循环判断，maxTreeDepth记录数深度
4、while循环，当队列中元素还没移除完时，遍历判断该队列元素：
  4.1、当移除的元素为null时，说明已经遍历了一行节点，此时如果队列为空，说明后续没有子节点了，返回maxTreeDepth
  4.2、否则，maxTreeDepth加一，并且往队尾补加null标志下一行
  4.3、若当前行还没遍历完，并且左右子节点存在的话，就把左右子节点加入队列

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // 1、边界条件预判：
  // 1.1、若根节点不存在，则返回深度为0
  if (root === null) {
    return 0;
  }

  // 1.2、若只有根节点一个节点，则返回深度为1
  if (root.left === null && root.right === null) {
    return 1;
  }

  // 2、创建一个队列（js用数组来模拟），存放一行节点，并且在队尾补加null来标识该行已被遍历完（遍历发现null时，说明已经遍历完一行了）
  const queue = [root, null];

  // 3、创建两个变量，queueFirstElement记录移除的队头元素，用于循环判断，maxTreeDepth记录数深度
  let queueFirstElement;
  let maxTreeDepth = 1;

  // 4、while循环，当队列中元素还没移除完时，遍历判断该队列元素：
  while ((queueFirstElement = queue.shift()) !== undefined) {
    // 4.1、当移除的元素为null时，说明已经遍历了一行节点，此时如果队列为空，说明后续没有子节点了，返回maxTreeDepth
    if (queueFirstElement === null) {
      if (queue.length === 0) {
        return maxTreeDepth;
      }
      // 4.2、否则，maxTreeDepth加一，并且往队尾补加null标志下一行
      maxTreeDepth++;
      queue.push(null);
      continue;
    }

    // 4.3、若当前行还没遍历完，并且左右子节点存在的话，就把左右子节点加入队列
    if (queueFirstElement.left !== null) {
      queue.push(queueFirstElement.left);
    }

    if (queueFirstElement.right !== null) {
      queue.push(queueFirstElement.right);
    }
  }
};

```


### 2.2、TypeScript Solution
**方法一**
```javascript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let maxTreeDepth: number = 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  return maxTreeDepth;
}

```
**方法二**

```javascript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return 1;
  }


  const queue: Array<TreeNode | null | undefined> = [root, null];


  let queueFirstElement: TreeNode | null | undefined;
  let maxTreeDepth: number = 1;


  while ((queueFirstElement = queue.shift()) !== undefined) {

    if (queueFirstElement === null) {
      if (queue.length === 0) {
        return maxTreeDepth;
      }

      maxTreeDepth++;
      queue.push(null);
      continue;
    }


    if (queueFirstElement.left !== null) {
      queue.push(queueFirstElement.left);
    }

    if (queueFirstElement.right !== null) {
      queue.push(queueFirstElement.right);
    }
  }
}

```

