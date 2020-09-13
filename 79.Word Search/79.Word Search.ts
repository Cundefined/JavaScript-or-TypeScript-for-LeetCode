function exist(board: string[][], word: string): boolean {
  // 1、创建记录【是否访问】标志的数组
  const isVisited: boolean[][] = new Array<boolean[]>(board.length);
  for (let i = 0; i < isVisited.length; i++) {
    isVisited[i] = new Array<boolean>(board[0].length);
  }

  // 2、遍历二维数组，调用递归函数
  for (let row: number = 0; row < board.length; row++) {
    for (let col: number = 0; col < board[0].length; col++) {
      let res: boolean = dfs(board, word, row, col, 0);
      if (res) {
        return true;
      }
    }
  }
  return false;

  // 3、创建dfs函数：
  function dfs(
    board: string[][],
    word: string,
    row: number,
    col: number,
    start: number
  ) {
    // 3.1、递归结束条件
    if (start > word.length - 1) {
      return true;
    }
    // 3.2边界条件
    // 3.2.1、当前点要存在，不越界
    if (
      row < 0 ||
      row > board.length - 1 ||
      col < 0 ||
      col > board[0].length - 1
    ) {
      return false;
    }

    // 3.2.2、当前的点已经访问过，或当前点就不是目标点
    if (isVisited[row][col] === true || board[row][col] !== word[start]) {
      return false;
    }

    // 3.3、排除掉边界false情况，当前点是没问题的，可以继续递归考察
    // 记录一下当前点已经被访问
    isVisited[row][col] = true;

    // 3.4、递归调用dfs函数，去寻找下一个目标字符，依次访问沉没当前元素的上下左右元素（往上沉没完之后，返回当前位置，往下沉没完之后，返回当前位置，接着把左右都沉没完）
    let res: boolean =
      dfs(board, word, row - 1, col, start + 1) ||
      dfs(board, word, row + 1, col, start + 1) ||
      dfs(board, word, row, col - 1, start + 1) ||
      dfs(board, word, row, col + 1, start + 1);

    // 3.5、如果基于当前点，可以为剩下的字符找到路径，返回true
    if (res) {
      return true;
    }

    // 3.6、如果当前dfs找不出，撤销当前点的访问状态。返回false，继续考察别的分支，
    isVisited[row][col] = false;
    return false;
  }
}
