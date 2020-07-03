/*
解题思路：
1、由于只能在原矩阵中置0，所以选择矩阵第一行、第一列作为当前行列是否需要置0
2、检查并标记第一行、第一列是否有0，防止后面置的0造成干扰，创建两个变量分别记录第一行、第一列是否有0
    2.1、检查第一行是否有0
    2.1、检查第一列是否有0
3、使用第一行、第一列来标记剩余其他行列是否含有0
    3.1、如果当前元素为0的话，就把他对应映射到第一行、第一列位置的元素标记为0
4、利用3的标0情况，把对应整行、整列全置0
    4.1、如果当前元素所在行或者列对应映射到第一行、第一列位置的元素为0的话，就把当前位置元素置0
5、最后，单独处理第一行、第一列
    5.1、如果firstRowHasZero为true,则说明第一行原来就有0，应该把第一行全部置0
    5.2、如果firstColHasZero为true,则说明第一列原来就有0，应该把第一列全部置0
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 1、由于只能在原矩阵中置0，所以选择矩阵第一行、第一列作为当前行列是否需要置0
  // 2、检查并标记第一行、第一列是否有0，防止后面置的0造成干扰，创建两个变量分别记录第一行、第一列是否有0
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // 2.1、检查第一行是否有0
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // 2.2、检查第一列是否有0
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // 3、使用第一行、第一列来标记剩余其他行列是否含有0
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      // 3.1、如果当前元素为0的话，就把他对应映射到第一行、第一列位置的元素标记为0
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // 4、利用3的标0情况，把对应整行、整列全置0
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      // 4.1、如果当前元素所在行或者列对应映射到第一行、第一列位置的元素为0的话，就把当前位置元素置0
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // 5、最后，单独处理第一行、第一列
  // 5.1、如果firstRowHasZero为true,则说明第一行原来就有0，应该把第一行全部置0
  if (firstRowHasZero) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }
  // 5.2、如果firstColHasZero为true,则说明第一列原来就有0，应该把第一列全部置0
  if (firstColHasZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
};
