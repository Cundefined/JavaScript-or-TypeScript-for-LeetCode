/*
解题思路：
1、由于低位在右，往左边高位进位，所以遍历数组元素选择从左依次处理：
    1.1、如果当前元素不为9的话，直接加一，就可以返回结果了
    1.2、如果当前元素为9的话，那就把当前元素置为0，继续遍历左边一位，发现不为9就执行1.1，达到进位效果
2、如果循环结束到这一步的话，说明函数并没有在for循环的1.1返回结果，那说明数组元素都是9，此时的digits数组元素应该已经都被置为0了
    那么只需要和1拼接成新数组即可得到结果
3、返回结果
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 1、由于低位在右，往左边高位进位，所以遍历数组元素选择从左依次处理：
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      // 1.1、如果当前元素不为9的话，直接加一，就可以返回结果了
      digits[i]++;
      return digits;
    } else {
      // 1.2、如果当前元素为9的话，那就把当前元素置为0，继续遍历左边一位，发现不为9就执行1.1，达到进位效果
      digits[i] = 0;
    }
  }

  // 2、如果循环结束到这一步的话，说明函数并没有在for循环的1.1返回结果，那说明数组元素都是9，此时的digits数组元素应该已经都被置为0了那么只需要和1拼接成新数组即可得到结果
  let result = [1, ...digits];

  // 3、返回结果
  return result;
};
