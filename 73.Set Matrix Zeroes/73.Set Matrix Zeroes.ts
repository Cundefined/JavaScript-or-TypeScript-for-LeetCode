/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let firstRowHasZero: boolean = false;
  let firstColHasZero: boolean = false;

  for (let col: number = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  for (let row: number = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  for (let row: number = 1; row < matrix.length; row++) {
    for (let col: number = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  for (let row: number = 1; row < matrix.length; row++) {
    for (let col: number = 1; col < matrix[0].length; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    for (let col: number = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  if (firstColHasZero) {
    for (let row: number = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
}
