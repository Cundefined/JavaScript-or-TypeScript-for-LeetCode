# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第62题 )  不同路径**
       一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200703132100895.png)
例如，上图是一个7 x 3 的网格。有多少可能的路径？​	

  **示例 1:**

```javascript
输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
 - 向右 -> 向右 -> 向下
 - 向右 -> 向下 -> 向右
 - 向下 -> 向右 -> 向右
```
**示例 2:**
```javascript
输入: m = 7, n = 3
输出: 28
```
提示：
 - 1 <= m, n <= 100 
 - 题目数据保证答案小于等于 2 * 10 ^ 9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：动态规划
 1. 创建一个一维记忆数组，再利用for循环往该数组里push空数组，得到一个二维数组
 

 2. 循环手动填充第一行、第一列的格子为1，因为到达这些格子都只有1条路径
 3. 遍历剩余的格子，二维数组遍历，两层for循环
 	3.1、当前格子路径数应该等于其左边格子和上边格子的路径数相加

 4. 返回最后终点的路径数值



### 2.1、JavaScript Solution

```javascript
/*
解题思路：动态规划
1、创建一个一维记忆数组，再利用for循环往该数组里push空数组，得到一个二维数组
2、循环手动填充第一行、第一列的格子为1，因为到达这些格子都只有1条路径
3、遍历剩余的格子，二维数组遍历，两层for循环
    3.1、当前格子路径数应该等于其左边格子和上边格子的路径数相加
4、返回最后终点的路径数值
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 1、创建一个一维记忆数组，再利用for循环往该数组里push空数组，得到一个二维数组
    const memo = [];
    for (let i = 0; i < m; i++) {
        memo.push([]);
    }

    // 2、循环手动填充第一行、第一列的格子为1，因为到达这些格子都只有1条路径
    // 填充第一行格子的路径数为1
    for (let col = 0; col < n; col++) {
        memo[0][col] = 1;
    }
    // 填充第一列格子的路径数为1
    for (let row = 0; row < m; row++) {
        memo[row][0] = 1;
    }

    // 3、遍历剩余的格子，二维数组遍历，两层for循环
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            // 3.1、当前格子路径数应该等于其左边格子和上边格子的路径数相加
            memo[row][col] = memo[row][col -1] + memo[row -1][col];
        }
    }

    // 4、返回最后终点的路径数值
    return memo[m -1][n -1];



};
```


### 2.2、TypeScript Solution

```javascript
function uniquePaths(m: number, n: number): number {
  const memo: number[][] = [];
  for (let i: number = 0; i < m; i++) {
    memo.push([]);
  }

  for (let col: number = 0; col < n; col++) {
    memo[0][col] = 1;
  }

  for (let row: number = 0; row < m; row++) {
    memo[row][0] = 1;
  }

  for (let row: number = 1; row < m; row++) {
    for (let col: number = 1; col < n; col++) {
      memo[row][col] = memo[row][col - 1] + memo[row - 1][col];
    }
  }

  return memo[m - 1][n - 1];
}
```

