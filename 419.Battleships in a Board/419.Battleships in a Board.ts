function countBattleships(board: string[][]): number {
  let countShips: number = 0;

  function dfs(row: number, col: number): void {
    if (
      row < 0 ||
      row > board.length - 1 ||
      col < 0 ||
      col > board[0].length - 1 ||
      board[row][col] === "."
    ) {
      return;
    }

    board[row][col] = ".";

    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  for (let row: number = 0; row < board.length; row++) {
    for (let col: number = 0; col < board[0].length; col++) {
      if (board[row][col] === "X") {
        countShips++;
        dfs(row, col);
      }
    }
  }

  return countShips;
}
