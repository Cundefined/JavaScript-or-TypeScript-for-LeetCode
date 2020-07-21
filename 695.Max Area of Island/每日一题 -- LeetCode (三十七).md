# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第695题 )  岛屿的最大面积**
      
给定一个包含了一些 0 和 1 的非空二维数组 grid 。

一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。)




​	  **示例 1:**

```javascript
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
```
对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。

**示例 2:**
```javascript
[[0,0,0,0,0,0,0,0]]
```
对于上面这个给定的矩阵, 返回 0。

 

**注意:** 给定的矩阵grid 的长度和宽度都不超过 50。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/max-area-of-island
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
解题思路：DFS-深度优先搜索 【参考200.Number of Islands、419.Battleships in a Board】
 1. 边界条件预判，如果输入的二维数组为空，则返回最大面积为0
 

 2. 定义变量，记录最大岛屿面积

 3. 创建dfs函数：
 	3.1、判断当前row、col是否越界，或者当前元素为0，则不执行沉没处理，直接return
    3.2、不越界且为1的话，就执行沉没，把1置0
    3.3、记录当前岛屿的面积，初始化为1，因为刚刚沉没了一个1
    3.4、递归调用dfs函数，依次访问沉没当前元素的上下左右元素，每次遇到1，都会把它加进当前岛屿的面积
    3.5、统计完当前岛屿的面积之后，返回该面积
 4. 遍历二维数组的每个元素：
 	4.1、沉没并计算当前岛屿的面积
    4.2、比较记录的最大面积和当前岛屿面积，取较大者去更新最大面积
  

 5. 返回最大面积

### 2.1、JavaScript Solution

```javascript
/*
解题思路：DFS-深度优先搜索 【参考200.Number of Islands、419.Battleships in a Board】
1、边界条件预判，如果输入的二维数组为空，则返回最大面积为0
2、定义变量，记录最大岛屿面积
3、创建dfs函数：
    3.1、判断当前row、col是否越界，或者当前元素为0，则不执行沉没处理，直接return
    3.2、不越界且为1的话，就执行沉没，把1置0
    3.3、记录当前岛屿的面积，初始化为1，因为刚刚沉没了一个1
    3.4、递归调用dfs函数，依次访问沉没当前元素的上下左右元素，每次遇到1，都会把它加进当前岛屿的面积
    3.5、统计完当前岛屿的面积之后，返回该面积
4、遍历二维数组的每个元素：
    4.1、沉没并计算当前岛屿的面积
    4.2、比较记录的最大面积和当前岛屿面积，取较大者去更新最大面积
5、返回最大面积
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  // 1、边界条件预判，如果输入的二维数组为空，则返回最大面积为0
  if (grid.length === 0) {
    return 0;
  }

  // 2、定义变量，记录最大岛屿面积
  let maxArea = 0;

  // 3、创建dfs函数：
  function dfs(row, col) {
    // 3.1、判断当前row、col是否越界，或者当前元素为.，则不执行沉没处理，直接return
    if (
      row < 0 ||
      row > grid.length - 1 ||
      col < 0 ||
      col > grid[0].length - 1 ||
      grid[row][col] === 0
    ) {
      return 0;
    }
    // 3.2、不越界且为1的话，就执行沉没，把1置0
    grid[row][col] = 0;
    // 3.3、记录当前岛屿的面积，初始化为1，因为刚刚沉没了一个1
    let currentArea = 1;

    // 3.4、递归调用dfs函数，依次访问沉没当前元素的上下左右元素，每次遇到1，都会把它加进当前岛屿的面积
    currentArea += dfs(row - 1, col);
    currentArea += dfs(row + 1, col);
    currentArea += dfs(row, col - 1);
    currentArea += dfs(row, col + 1);

    // 3.5、统计完当前岛屿的面积之后，返回该面积
    return currentArea;
  }

  // 4、遍历二维数组的每个元素：
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        // 4.1、沉没并计算当前岛屿的面积
        let currentArea = dfs(row, col);
        // 4.2、比较记录的最大面积和当前岛屿面积，取较大者去更新最大面积
        maxArea = Math.max(maxArea, currentArea);
      }
    }
  }

  // 5、返回最大面积
  return maxArea;
};
```


### 2.2、TypeScript Solution

```javascript
function maxAreaOfIsland(grid: number[][]): number {
    if (grid.length === 0) {
        return 0;
      }
    
      let maxArea: number = 0;
    
      function dfs(row: number, col: number): number {

        if (
          row < 0 ||
          row > grid.length - 1 ||
          col < 0 ||
          col > grid[0].length - 1 ||
          grid[row][col] === 0
        ) {
          return 0;
        }

        grid[row][col] = 0;

        let currentArea: number = 1;
    
        currentArea += dfs(row - 1, col);
        currentArea += dfs(row + 1, col);
        currentArea += dfs(row, col - 1);
        currentArea += dfs(row, col + 1);
    
        return currentArea;
      }
    
      for (let row: number = 0; row < grid.length; row++) {
        for (let col: number = 0; col < grid[0].length; col++) {
          if (grid[row][col] === 1) {
            let currentArea: number = dfs(row, col);
            maxArea = Math.max(maxArea, currentArea);
          }
        }
      }
    
      return maxArea;
};
```

