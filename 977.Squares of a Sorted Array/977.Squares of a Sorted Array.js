/*
解题思路：双指针
1、创建结果数组
2、创建两个指针，分别指向原数组左右两端
3、创建结果数组的指针，用于从后往前加入结果数组，初始化为A.length - 1
4、循环遍历
5、返回结果
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  const res = [];
  let left = 0;
  let right = A.length - 1;

  let resPointer = A.length - 1;

  while (left <= right) {
    if (A[left] * A[left] < A[right] * A[right]) {
      res[resPointer] = A[right] * A[right];
      right--;
    } else {
      res[resPointer] = A[left] * A[left];
      left++;
    }

    resPointer--;
  }

  return res;
};
