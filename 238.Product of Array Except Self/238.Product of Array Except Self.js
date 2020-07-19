/*
解题思路：
1、创建一个和nums等长的数组，存储当前元素左右两侧数字的乘积，初始化为全1
2、创建左侧乘积变量，动态记录当前元素左侧的所有元素乘积
3、for循环正向遍历数组：
    3.1、更新result数组元素
    3.2、更新product，把当前元素也乘进去，作为下个元素的左侧元素乘积
4、创建右侧乘积变量，动态记录当前元素右侧的所有元素乘积
5、for循环反向遍历数组：
    5.1、更新result数组元素
    5.2、更新product，把当前元素也乘进去，作为下个元素的右侧元素乘积
6、返回结果数组
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 1、创建一个和nums等长的数组，存储当前元素左右两侧数字的乘积，初始化为全1
  let result = new Array(nums.length).fill(1);

  // 2、创建左侧乘积变量，动态记录当前元素左侧的所有元素乘积
  let leftProduct = 1;

  // 3、for循环正向遍历数组：
  for (let i = 0; i < nums.length; i++) {
    result[i] = result[i] * leftProduct;
    leftProduct = leftProduct * nums[i];
  }

  // 4、创建右侧乘积变量，动态记录当前元素右侧的所有元素乘积
  let rightProduct = 1;

  // 5、for循环反向遍历数组：
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    rightProduct = rightProduct * nums[i];
  }

  // 6、返回结果数组
  return result;
};

