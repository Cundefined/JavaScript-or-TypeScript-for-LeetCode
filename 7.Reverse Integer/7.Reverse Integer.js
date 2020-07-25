/*
解题思路：方法一：整数 -> 数组
由于整数不可变、不可遍历，需要转换成可变的、可遍历的数组来处理
整数 -> toString() -> 字符串 -> split() -> 数组
数组 -> reverse() -> 反转 -> join() -> 字符串 -> parseInt() -> 整数 
1、创建变量，记录Int范围，用于判断反转后是否溢出
2、创建变量，记录输入整数的符号
3、记录完符号后，就去绝对值，当作正整数来处理
4、整数 -> toString() -> 字符串 -> split() -> 数组
5、数组 -> reverse() -> 反转 -> join() -> 字符串 -> parseInt() -> 整数 
6、把符号还给反转后的整数，再判断是否溢出
7、返回结果
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 1、创建变量，记录Int范围，用于判断反转后是否溢出
  let min = Math.pow(-2, 31);
  let max = Math.pow(2, 31) - 1;

  // 2、创建变量，记录输入整数的符号
  //   Math.sign() 函数返回一个数字的符号, 指示数字是正数，负数还是零
  //   此函数共有5种返回值, 分别是 1, -1, 0, -0, NaN. 代表的各是正数, 负数, 正零, 负零, NaN。
  let sign = Math.sign(x);

  // 3、记录完符号后，就去绝对值，当作正整数来处理
  x = Math.abs(x);

  // 4、整数 -> toString() -> 字符串 -> split() -> 数组
  let intArray = x.toString().split("");

  // 5、数组 -> reverse() -> 反转 -> join() -> 字符串 -> parseInt() -> 整数
  let result = parseInt(intArray.reverse().join(""));

  // 6、把符号还给反转后的整数，再判断是否溢出
  result = sign * result;
  if (result < min || result > max) {
    return 0;
  }

  // 7、返回结果
  return result;
};