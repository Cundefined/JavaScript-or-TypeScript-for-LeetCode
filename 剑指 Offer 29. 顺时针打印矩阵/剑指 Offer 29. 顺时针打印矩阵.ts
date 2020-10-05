function spiralOrder(matrix: number[][]): number[] {
  let rows: number = matrix.length;
  let cols: number = rows && matrix[0].length;

  const res: number[] = [];
  if (rows === 0 || cols === 0) {
    return res;
  }

  let left: number = 0;
  let right: number = cols - 1;
  let top: number = 0;
  let bottom: number = rows - 1;

  let direction: string = "toRight";

  while (left <= right && top <= bottom) {
    if (direction === "toRight") {
      for (let col: number = left; col <= right; col++) {
        res.push(matrix[top][col]);
      }
      top++;
      direction = "toBottom";
    } else if (direction === "toBottom") {
      for (let row: number = top; row <= bottom; row++) {
        res.push(matrix[row][right]);
      }
      right--;
      direction = "toLeft";
    } else if (direction === "toLeft") {
      for (let col: number = right; col >= left; col--) {
        res.push(matrix[bottom][col]);
      }
      bottom--;
      direction = "toUp";
    } else if (direction === "toUp") {
      for (let row: number = bottom; row >= top; row--) {
        res.push(matrix[row][left]);
      }
      left++;
      direction = "toRight";
    }
  }

  return res;
}
