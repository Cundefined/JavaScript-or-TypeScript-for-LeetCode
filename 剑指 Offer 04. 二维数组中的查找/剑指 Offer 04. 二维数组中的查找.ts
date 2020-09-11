function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows: number = matrix.length;
  const cols: number = matrix[0].length;

  //从右上角开始
  let row: number = 0;
  let col: number = cols - 1;

  while (row < rows && col >= 0) {
    // 1、如果找到了，返回true
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      // 2、如果值比target小，则说明这一行都比target小，row往下移一行 row++
      row++;
    } else {
      // 3、如果值比target大，说明这一列都比target大，col往左移一行 col--
      col--;
    }
  }

  return false;
}
