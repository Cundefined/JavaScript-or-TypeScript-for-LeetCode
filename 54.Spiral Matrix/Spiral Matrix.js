/*
解题思路：
1、判断输入是否为空，为空就返回空数组
2、用left、right、top、bottom定义4个边界
3、初始化遍历方向，依次是向右、下、左、上，顺时针螺旋
4、初始化结果数组
5、while循环，只要左边界小于等于右边界，并且上边界小于等于下边界，就一直螺旋遍历：
    5.1、依次按照向右、下、左、上的方向遍历二维数组，并且将沿途的元素保存在结果数组
6、返回结果数组
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 1、判断输入是否为空，为空就返回空数组
  if (matrix.length === 0) {
    return [];
  }

  // 2、用left、right、top、bottom定义4个边界以及当前方向
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  // 3、初始化遍历方向，依次是向右、下、左、上，顺时针螺旋
  let direction = "right";

  // 4、初始化结果数组
  let result = [];

  // 5、while循环，只要左边界小于等于右边界，并且上边界小于等于下边界，就一直螺旋遍历：
  while (left <= right && top <= bottom) {
    //  5.1、依次按照向右、下、左、上的方向遍历二维数组，并且将沿途的元素保存在结果数组
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = "bottom";
    } else if (direction === "bottom") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "top";
    } else if (direction === "top") {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }

  // 6、返回结果数组
  return result;
};
