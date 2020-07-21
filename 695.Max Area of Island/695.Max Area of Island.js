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
