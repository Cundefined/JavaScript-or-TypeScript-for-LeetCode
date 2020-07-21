/*
解题思路：
1、创建两个指针，初始化分别指向数组的开头和结尾
2、i<j时，while循环，讨论4种情况：
    2.1、A[i]为奇，A[j]为奇 -> A[j]位置正确，不处理，指针移动 j--
    2.2、A[i]为奇，A[j]为偶 -> A[i]、A[j]交换位置，i++,j--
    2.3、A[i]为偶，A[j]为奇 -> 位置都正确，不处理，指针移动 i++,j-- 
    2.4、A[i]为偶，A[j]为偶 -> A[i]位置正确，不处理，指针移动 i++ 
3、循环结束，返回原数组
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  // 1、创建两个指针，初始化分别指向数组的开头和结尾
  let i = 0;
  let j = A.length - 1;

  // 2、i<j时，while循环，讨论4种情况：
  while (i < j) {
    // 2.1、A[i]为奇，A[j]为奇 -> A[j]位置正确，不处理，指针移动 j--
    if (A[i] % 2 === 1 && A[j] % 2 === 1) {
      j--;
    } else if (A[i] % 2 === 1 && A[j] % 2 === 0) {
      // 2.2、A[i]为奇，A[j]为偶 -> A[i]、A[j]交换位置，i++,j--
      [A[j], A[i]] = [A[i], A[j]];
      i++;
      j--;
    } else if (A[i] % 2 === 0 && A[j] % 2 === 1) {
      // 2.3、A[i]为偶，A[j]为奇 -> 位置都正确，不处理，指针移动 i++,j--
      i++;
      j--;
    } else {
      // 2.4、A[i]为偶，A[j]为偶 -> A[i]位置正确，不处理，指针移动 i++
      i++;
    }
  }

  // 3、循环结束，返回原数组
  return A;
};