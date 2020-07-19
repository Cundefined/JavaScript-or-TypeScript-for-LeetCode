/*
进阶:
你可以用一次扫描算法，只使用O(1)额外空间，并且不修改甲板的值来解决这个问题吗？
*/
// 利用本题特点：战舰只能横着、竖着放置，如果发现当前X的上面或者左面也有X的话，
// 说明当前处于战舰的左侧或者下侧，不应该重复计数，只有for循环到战舰的最左遍或者最右边时，才记一次数
// 这样只使用了一次扫描！！！
function countBattleships(board: string[][]): number {
  let countShips: number = 0;

  for (let row: number = 0; row < board.length; row++) {
    for (let col: number = 0; col < board[0].length; col++) {
      if (board[row][col] === "X") {
        if (row > 0 && board[row - 1][col] === 'X') {
          continue;
        }

        if (col > 0 && board[row][col - 1] === 'X') {
          continue;
        }

        countShips++;
      }
    }
  }

  return countShips;
}
