/*
解题思路：二分查找
1、创建两个指针，初始分别指向数组的开头和结尾
2、while循环，当left<=right时，继续查找，否则停止查找：
    2.1、计算中间位置，向下取整
    2.2、如果中间位置的值等于目标值，直接返回中间位置
    2.3、如果中间位置的值小于目标值，left指针往右移到mid+1
    2.4、否则中间位置的值大于目标值，right指针往左移到mid-1
3、循环结束，还没返回目标索引的话，说明没找到，直接返回-1

注意：二分查找的难点在于，“边界”的处理，比如为什么left<=right，不取等于会怎么样
    可以把等号去掉，看看报错，发现如果输入数组只有1个元素，且为目标值时，两个指针就必须重合
    不同的问题，边界的选取也要具体分析
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 1、创建两个指针，初始分别指向数组的开头和结尾
  let left = 0;
  let right = nums.length - 1;

  // 2、while循环，当left<=right时，继续查找，否则停止查找：
  while (left <= right) {
    // 2.1、计算中间位置，向下取整
    // left + (right - left) / 2其实等价于（left + right）/ 2
    // 但前者是为了防止计算时超过整型的范围，容错，默认写法
    let mid = Math.floor(left + (right - left) / 2);

    // 2.2、如果中间位置的值等于目标值，直接返回中间位置
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // 2.3、如果中间位置的值小于目标s值，left指针往右移到mid+1
      left = mid + 1;
    } else {
      // 2.4、否则中间位置的值大于目标值，right指针往左移到mid-1

      right = mid - 1;
    }
  }

  // 3、循环结束，还没返回目标索引的话，说明没找到，直接返回-1
  return -1;
};
