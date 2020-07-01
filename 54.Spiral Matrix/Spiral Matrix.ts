function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }

  let top: number = 0;
  let right: number = matrix[0].length - 1;
  let bottom: number = matrix.length - 1;
  let left: number = 0;

  let direction: string = "right";
  let result: number[] = [];

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i: number = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = "bottom";
    } else if (direction === "bottom") {
      for (let i: number = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i: number = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "top";
    } else if (direction === "top") {
      for (let i: number = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }
  return result;
}
