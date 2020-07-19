# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第200题 )  岛屿数量**
       给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。


​	  **示例 1:**

```javascript
输入:
[
['1','1','1','1','0'],
['1','1','0','1','0'],
['1','1','0','0','0'],
['0','0','0','0','0']
]
输出: 1
```
**示例 2:**
```javascript
输入:
[
['1','1','0','0','0'],
['1','1','0','0','0'],
['0','0','1','0','0'],
['0','0','0','1','1']
]
输出: 3
解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：DFS-深度优先搜索
 1. 定义变量，记录岛屿数量
 

 2. 创建dfs函数：
 	2.1、判断当前row、col是否越界，或者当前元素为0，则不执行沉没处理，直接return
    2.2、不越界且为1的话，就执行沉没，把1置0
    2.3、递归调用dfs函数，依次访问沉没当前元素的上下左右元素（往上沉没完之后，返回当前位置，往下沉没完之后，返回当前位置，接着把左右都沉没完）
 3. 遍历二维数组的每个元素：
 	3.1、如果当前元素为1的话，就说明找到了一个岛屿，把计数变量加一，然后沉没当前元素所在的岛屿
 5. 返回岛屿数量

### 2.1、JavaScript Solution

```javascript
/*
解题思路：DFS-深度优先搜索
1、定义变量，记录岛屿数量
2、创建dfs函数：
    2.1、判断当前row、col是否越界，或者当前元素为0，则不执行沉没处理，直接return
    2.2、不越界且为1的话，就执行沉没，把1置0
    2.3、递归调用dfs函数，依次访问沉没当前元素的上下左右元素（往上沉没完之后，返回当前位置，往下沉没完之后，返回当前位置，接着把左右都沉没完）
3、遍历二维数组的每个元素：
    3.1、如果当前元素为1的话，就说明找到了一个岛屿，把计数变量加一，然后沉没当前元素所在的岛屿
4、返回岛屿数量
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 1、定义变量，记录岛屿数量
  let countIsland = 0;

  // 2、创建dfs函数：
  function dfs(row, col) {
    // 2.1、判断当前row、col是否越界，或者当前元素为0，则不执行沉没处理，直接return
    if (
      row < 0 ||
      row > grid.length - 1 ||
      col < 0 ||
      col > grid[0].length - 1 ||
      grid[row][col] === "0"
    ) {
      return;
    }

    // 2.2、不越界且为1的话，就执行沉没，把1置0
    grid[row][col] = "0";

    // 2.3、递归调用dfs函数，依次访问沉没当前元素的上下左右元素（往上沉没完之后，返回当前位置，往下沉没完之后，返回当前位置，接着把左右都沉没完）
    // 往上一直沉没
    dfs(row - 1, col);
    // 往下一直沉没
    dfs(row + 1, col);
    // 往左一直沉没
    dfs(row, col - 1);
    // 往右一直沉没
    dfs(row, col + 1);
  }

  // 3、遍历二维数组的每个元素：
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        countIsland++;
        dfs(row, col);
      }
    }
  }

  // 4、返回岛屿数量
  return countIsland;
};
```


### 2.2、TypeScript Solution

```javascript
function numIslands(grid: string[][]): number {
  
    let countIsland: number = 0;

    function dfs(row: number, col: number): void {
        if (row < 0 || row > grid.length - 1 || col < 0 || col > grid[0].length - 1 || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';

        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }

    for (let row: number = 0; row < grid.length; row++) {
        for (let col: number = 0; col < grid[0].length; col++) {
            if (grid[row][col] === '1') {
                countIsland++;
                dfs(row, col);
            }
        }
    }

  return countIsland;
}
```

