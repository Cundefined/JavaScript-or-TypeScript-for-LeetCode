/*
解题思路：二分查找
1、边界条件预判：如果矩阵为空，返回false
2、标准的二分查找模板
注意：需要将展平后的mid索引，转换为mid元素在矩阵的行和列坐标
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 1、边界条件预判：如果矩阵为空，返回false
  if (matrix.length === 0) {
    return false;
  }

  let row = matrix.length;
  let column = matrix[0].length;

  let left = 0;
  let right = row * column - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    // 将展平后的mid索引，转换为mid元素在矩阵的行和列坐标
    let midPosRow = Math.floor(mid / column);
    let midPosColumn = mid % column;

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
