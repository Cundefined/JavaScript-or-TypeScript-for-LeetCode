/*
解题思路：DFS-深度优先搜索 【参考200.Number of Islands】
1、定义变量，记录战舰数量
2、创建dfs函数：
    2.1、判断当前row、col是否越界，或者当前元素为.，则不执行沉没处理，直接return
    2.2、不越界且为X的话，就执行沉没，把X置.
    2.3、递归调用dfs函数，依次访问沉没当前元素的上下左右元素（往上沉没完之后，返回当前位置，往下沉没完之后，返回当前位置，接着把左右都沉没完）
3、遍历二维数组的每个元素：
    3.1、如果当前元素为1的话，就说明找到了一个战舰，把计数变量加一，然后沉没当前元素所在的战舰
4、返回战舰数量
*/
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {

  // 1、定义变量，记录战舰数量
  let countShips = 0;

  // 2、创建dfs函数：
  function dfs(row, col) {
    // 2.1、判断当前row、col是否越界，或者当前元素为0，则不执行沉没处理，直接return
    if (
      row < 0 ||
      row > board.length - 1 ||
      col < 0 ||
      col > board[0].length - 1 ||
      board[row][col] === "."
    ) {
      return;
    }

    // 2.2、不越界且为X的话，就执行沉没，把X置.
    board[row][col] = ".";

    // 2.3、递归调用dfs函数，依次访问沉没当前元素的上下左右元素（往上沉没完之后，返回当前位置，往下沉没完之后，返回当前位置，接着把左右都沉没完）
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }

  // 3、遍历二维数组的每个元素：
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // 3.1、如果当前元素为1的话，就说明找到了一个战舰，把计数变量加一，然后沉没当前元素所在的战舰
      if (board[row][col] === "X") {
        countShips++;
        dfs(row, col);
      }
    }
  }

  // 4、返回战舰数量
  return countShips;
};
