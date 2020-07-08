/*
解题思路：先考虑翻转分界区再二分搜索
1、预判，输入数组只有一个元素，则返回第一个元素即为最小值
2、创建二分搜索的两个指针，初始分别指向数组开头和结尾
3、先判断给定数组是否被反转，若没反转就直接返回第一个元素即最小值
4、while循环，left<right时，一直搜索：
    4.1、计算mid中间位置
    4.2、先考虑翻转分界区：
        4.2.1、如果mid位置元素>mid+1位置元素，说明不递增，突然减小，那mid+1元素就是最小值
        4.2.2、如果mid-1位置元素>mid位置元素,说明不递增，突然减小，那mid元素就是最小值
    4.3、开始二分搜索：
        4.3.1、如果left元素<mid元素，说明mid在最小值的左边，即最小值在mid的右边，应抛弃左半边，left指针右移
        4.3.2、否则，right指针左移
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 1、预判，输入数组只有一个元素，则返回第一个元素即为最小值
  if (nums.length === 1) {
    return nums[0];
  }
  // 2、创建二分搜索的两个指针，初始分别指向数组开头和结尾
  let left = 0;
  let right = nums.length - 1;

  // 3、先判断给定数组是否被反转，若没反转就直接返回第一个元素即最小值
  if (nums[right] > nums[left]) {
    return nums[0];
  }

  // 4、while循环，left<right时，一直搜索：
  while (left < right) {
    // 4.1、计算mid中间位置
    let mid = Math.floor(left + (right - left) / 2);

    // 4.2、先考虑翻转分界区：
    // 4.2.1、如果mid位置元素>mid+1位置元素，说明不递增，突然减小，那mid+1元素就是最小值
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // 4.2.2、如果mid-1位置元素>mid位置元素,说明不递增，突然减小，那mid元素就是最小值
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    // 4.3、开始二分搜索：
    if (nums[left] < nums[mid]) {
      // 4.3.1、如果left元素<mid元素，说明mid在最小值的左边，即最小值在mid的右边，应抛弃左半边，left指针右移
      left = mid + 1;
    } else {
      // 4.3.2、否则，right指针左移
      right = mid - 1;
    }
  }
};
