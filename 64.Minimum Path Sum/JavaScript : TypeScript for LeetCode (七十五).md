# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第64题 )  最小路径和**
       
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明**：每次只能向下或者向右移动一步。

**示例 :**
```javascript
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems//minimum-path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


## 2、解题思路
方法：动态规划
```javascript
DP核心问题：状态 状态转移方程
1、state: f[x][y]从当前位置x,y走到终点的最短路径和 
2、function: f[x][y] = min(f[x+1][y], f[x][y+1]) + A[x][y] 
3、intialize: 初始化考虑特殊情况（不能用递推公式包括的情况）最后一行、最右一列、最后一个元素
4、answer: f[0][0]
时间复杂度 -- O(mn) 遍历一次整个矩阵
空间复杂度 -- O(mn) 创建了一个同样大小的mxn的DP矩阵
优化空间复杂度：
    DP：用一维数组代替二维数组
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let rows = grid.length;
  let columns = grid[0].length;

  // 边界条件预判
  if (rows === 0 || columns === 0) {
    return 0;
  }

  // 1、state: f[x][y]从当前位置x,y走到终点的最短路径和
  //   let dp = new Array(rows);
  //   for (let i = 0; i < dp.length; i++) {
  //     dp[i] = new Array(columns);
  //   }
  // 优化空间复杂度：
  let dp = new Array(columns);

  // 2、function: f[x][y] = min(f[x+1][y], f[x][y+1]) + A[x][y]
  // 3、intialize: 初始化考虑特殊情况（不能用递推公式包括的情况）最后一行、最右一列、最后一个元素
  //从最后一行开始，自下往上
  for (let row = rows - 1; row >= 0; row--) {
    //   从最后一行的最后一个元素开始（右下角）
    for (let col = columns - 1; col >= 0; col--) {
      // 由于最后一行只能往右走，最右一列只能往下走，不满足递推公式，需要单独讨论
      // 最后一行(除了右下角那个元素)只能往右走
      if (row === rows - 1 && col !== columns - 1) {
        dp[col] = dp[col + 1] + grid[row][col];
      } else if (row !== rows - 1 && col === columns - 1) {
        // 最后一列(除了右下角那个元素)只能往下走
        dp[col] = dp[col] + grid[row][col];
      } else if (row !== rows - 1 && col !== columns - 1) {
        // 一般情况，满足递推公式
        dp[col] = Math.min(dp[col], dp[col + 1]) + grid[row][col];
      } else {
        // 右下角元素
        dp[col] = grid[row][col];
      }
    }
  }

  // 4、answer: f[0]
  return dp[0];
};
```

### 2.2、TypeScript Solution

```javascript
function minPathSum(grid: number[][]): number {
  let rows: number = grid.length;
  let columns: number = grid[0].length;

  if (rows === 0 || columns === 0) {
    return 0;
  }

  // 优化空间复杂度：
  let dp: number[] = new Array<number>(columns);

  for (let row: number = rows - 1; row >= 0; row--) {
    //   从最后一行的最后一个元素开始（右下角）
    for (let col: number = columns - 1; col >= 0; col--) {
      // 由于最后一行只能往右走，最右一列只能往下走，不满足递推公式，需要单独讨论
      // 最后一行(除了右下角那个元素)只能往右走
      if (row === rows - 1 && col !== columns - 1) {
        dp[col] = dp[col + 1] + grid[row][col];
      } else if (row !== rows - 1 && col === columns - 1) {
        // 最后一列(除了右下角那个元素)只能往下走
        dp[col] = dp[col] + grid[row][col];
      } else if (row !== rows - 1 && col !== columns - 1) {
        // 一般情况，满足递推公式
        dp[col] = Math.min(dp[col], dp[col + 1]) + grid[row][col];
      } else {
        // 右下角元素
        dp[col] = grid[row][col];
      }
    }
  }

  // 4、answer: f[0]
  return dp[0];
}
```

