function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) {
    return false;
  }

  let row: number = matrix.length;
  let column: number = matrix[0].length;

  let left: number = 0;
  let right: number = row * column - 1;

  while (left <= right) {
    let mid: number = left + Math.floor((right - left) / 2);

    // 将展平后的mid索引，转换为mid元素在矩阵的行和列坐标
    let midPosRow: number = Math.floor(mid / column);
    let midPosColumn: number = mid % column;

    if (matrix[midPosRow][midPosColumn] === target) {
      return true;
    } else if (matrix[midPosRow][midPosColumn] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};