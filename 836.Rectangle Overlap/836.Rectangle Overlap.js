/*
解题思路：
1、两个矩形有4种不重叠的情况，即rec1在rec2的上下左右侧，返回false
2、否则，返回true
*/
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // 1、两个矩形有4众不重叠的情况，即rec1在rec2的上下左右侧，返回false
  if (
    rec1[2] <= rec2[0] ||
    rec1[0] >= rec2[2] ||
    rec1[1] >= rec2[3] ||
    rec1[3] <= rec2[1]
  ) {
    return false;
  }
  // 2、否则，返回true
  return true;
};
