/*
解题思路：先考虑翻转分界区再二分搜索
参考【154.Find Minimum in Rotated Sorted Array II】
1、预判，输入数组只有一个元素，则返回第一个元素即为最小值
2、创建二分搜索的两个指针，初始分别指向数组开头和结尾
3、先判断给定数组是否被反转，若没反转就直接返回第一个元素即最小值
4、while循环，left<right时，一直搜索：
     4.1、计算mid中间位置
     4.2、开始二分搜索
*/
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  // 1、预判，输入数组只有一个元素，则返回第一个元素即为最小值
  if (numbers.length === 1) {
    return numbers[0];
  }
  // 2、创建二分搜索的两个指针，初始分别指向数组开头和结尾
  let left = 0;
  let right = numbers.length - 1;

  // 3、先判断给定数组是否被反转，若没反转就直接返回第一个元素即最小值
  if (numbers[right] > numbers[left]) {
    return numbers[0];
  }

  // 4、while循环，left<right时，一直搜索：
  while (left < right) {
    // 4.1、计算mid中间位置
    let mid = Math.floor(left + (right - left) / 2);

    // 4.2、开始二分搜索：
    if (numbers[mid] < numbers[right]) {
      right = mid;
    } else if (numbers[mid] > numbers[right]) {
      left = mid + 1;
    } else {
      right--;
    }
  }

  return numbers[right];
};
