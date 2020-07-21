/*
解题思路：DFS-深度优先搜索 【参考200.Number of Islands、419.Battleships in a Board、695.Max Area of Island】
1、边界条件预判：
    1.1、如果输入的二维数组为空，则返回空数组
    1.2、如果输入的二维数组只有一个元素，则直接赋值新颜色，返回该数组
    1.3、如果着色位置的像素颜色等于新颜色，就不用改了，直接返回图像
2、定义变量，记录原来的颜色，用于后续判断
3、创建dfs函数，探索给定像素位置附件的可改颜色区域：
    3.1、判断当前sr, sc是否越界，或者当前元素不为原来的颜色为0，则不执行着色，直接return
    3.2、不越界且为oldColor的话，就执行着色，把oldColor置newColor
    3.3、递归调用dfs函数，依次访问着色当前像素的上下左右像素
4、调用dfs函数，并返回着色后的image
*/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  // 1、边界条件预判：
  // 1.1、如果输入的二维数组为空，则返回空数组
  if (image.length === 0) {
    return [];
  }
  // 1.2、如果输入的二维数组只有一个元素，则直接赋值新颜色，返回该数组
  if (image.length === 1 && image[0].length === 1) {
    image[sr][sc] = newColor;
    return image;
  }
  // 1.3、如果着色位置的像素颜色等于新颜色，就不用改了，直接返回图像
  if (image[sr][sc] === newColor) {
    return image;
  }

  // 2、定义变量，记录原来的颜色
  let oldColor = image[sr][sc];

  // 3、创建dfs函数，探索给定像素位置附件的可改颜色区域：
  function dfs(sr, sc) {
    //   3.1、判断当前sr, sc是否越界，或者当前元素不为原来的颜色为0，则不执行着色，直接return
    if (
      sr < 0 ||
      sr > image.length - 1 ||
      sc < 0 ||
      sc > image[0].length - 1 ||
      image[sr][sc] !== oldColor
    ) {
      return;
    }

    // 3.2、不越界且为oldColor的话，就执行着色，把oldColor置newColor
    image[sr][sc] = newColor;

    // 3.3、递归调用dfs函数，依次访问着色当前像素的上下左右像素
    dfs(sr - 1, sc);
    dfs(sr + 1, sc);
    dfs(sr, sc - 1);
    dfs(sr, sc + 1);
  }
  // 4、调用dfs函数，并返回着色后的image
  dfs(sr, sc);

  return image;
};
