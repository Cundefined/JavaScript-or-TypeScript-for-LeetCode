/**
 * 解题思路：
 *  1. 定义一个空字典，key为数组元素值,value为该元素在数组中对应索引值
 *  2. 遍历输入的数组
 *      2.1 用目标值减去数组元素
 *      2.2 判断字典中是否存在该差值，若不存在就添加进去
 *      2.3 若存在该差值，说明数组中有两数之和为目标值，则返回两数的索引
 *  3. 若最后遍历结束，都还没在字典中找到该差值，就返回空数组
 */

function twoSum(nums: number[], target: number): number[] {
  // 1、定义一个空字典，key为数组元素值,value为该元素在数组中对应索引值
  const map = new Map();
  // 2、遍历输入的数组
  for (let i = 0; i < nums.length; i++) {
    // 3、用目标值减去数组元素
    const subtractValue: number = target - nums[i];
    // 4、判断字典中是否存在该差值，若不存在就添加进去
    if (!map.has(subtractValue)) {
      map.set(nums[i], i);
    } else {
      // 若存在该差值，说明数组中有两数之和为目标值
      // 则返回两数的索引
      return [map.get(subtractValue), i];
    }
  }
  // 5、若遍历结束都还没在字典中找到该差值，就返回空数组
  return [];
}
