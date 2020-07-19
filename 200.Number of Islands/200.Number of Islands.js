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
