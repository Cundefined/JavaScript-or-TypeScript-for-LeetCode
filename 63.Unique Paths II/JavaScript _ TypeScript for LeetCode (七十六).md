# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第63题 )  不同路径 II**
 
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

**说明**：m 和 n 的值均不超过 100。

**示例 ：**
```javascript
输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。




## 2、解题思路
方法：动态规划
```javascript
DP核心问题：状态 状态转移方程
1、state: f[x][y]从起点位置(0,0)走到当前位置(x,y)的路径总数
2、function: 三种特殊情况 + 一般情况
    1）、障碍位置，f[x][y] = 0
    2）、第一行时，f[x][y] = f[x][y-1]
    3）、第一列时，f[x][y] = f[x-1][y] 
    4）、非第一行且非第一列时（一般情况），f[x][y] = f[x][y-1] + f[x-1][y]
3、intialize: 起点状态dp[0][0] = 1
4、answer: f[0][0]
时间复杂度 -- O(mn) 遍历一次整个矩阵
空间复杂度 -- O(mn) 创建了一个同样大小的mxn的DP矩阵
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let rows = obstacleGrid.length;
  let columns = obstacleGrid[0].length;
  // 边界条件预判
  if (rows === 0 || columns === 0) {
    return 0;
  }

  // 1、state: f[x][y]从起点位置(0,0)走到当前位置(x,y)的路径总数
  let dp = new Array(rows);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(columns);
  }

  // 3、intialize: 起点状态dp[0][0] = 1
  //   dp[0][0] = 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (obstacleGrid[row][col] === 1) {
        // 1）、障碍位置，f[x][y] = 0
        dp[row][col] = 0;
      } else if (row === 0 && col > 0) {
        // 2）、第一行时，f[x][y] = f[x][y-1]
        dp[row][col] = dp[row][col - 1];
      } else if (row > 0 && col === 0) {
        // 3）、第一列时，f[x][y] = f[x-1][y]
        dp[row][col] = dp[row - 1][col];
      } else if (row > 0 && col > 0) {
        // 4）、非第一行且非第一列时（一般情况），f[x][y] = f[x][y-1] + f[x-1][y]
        dp[row][col] = dp[row][col - 1] + dp[row - 1][col];
      } else {
        dp[row][col] = 1;
      }
    }
  }

  return dp[rows - 1][columns - 1];
};
```

### 2.2、TypeScript Solution

```javascript
/*
优化空间复杂度：
    DP：用一维数组代替二维数组
*/
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  let rows: number = obstacleGrid.length;
  let columns: number = obstacleGrid[0].length;

  if (rows === 0 || columns === 0) {
    return 0;
  }

  //   优化空间复杂度
  let dp: number[] = new Array<number>(columns);

  for (let row: number = 0; row < rows; row++) {
    for (let col: number = 0; col < columns; col++) {
      if (obstacleGrid[row][col] === 1) {
        dp[col] = 0;
      } else if (row === 0 && col > 0) {
        dp[col] = dp[col - 1];
      } else if (row > 0 && col === 0) {
        dp[col] = dp[col];
      } else if (row > 0 && col > 0) {
        dp[col] = dp[col - 1] + dp[col];
      } else {
        dp[col] = 1;
      }
    }
  }

  return dp[columns - 1];
}
```

