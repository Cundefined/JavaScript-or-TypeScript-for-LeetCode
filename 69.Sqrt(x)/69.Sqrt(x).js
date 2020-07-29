/*
解题思路：二分法
注意：位运算更高效，以后可以考虑多使用
位运算参考：https://www.cnblogs.com/ckAng/p/9996699.html
1、边界条件预判，如果输入正整数x<=1，则返回x
2、创建两个指针left、right,分别初始化为1和x/2，由于x/2可能为小数
   可以考虑floor下取整，也可以用JS的位运算 “有符号右移(>>)”，右移一位即为二分之一，还取了整
3、while循环，当left紧挨着right时，就不需要二分了，即left+1===right时，停止循环，否则：
    3.1、计算中间位置mid，采用防溢出+位运算（自带取整，且二进制运算高效）
    3.2、如果mid * mid === x，则找到了，返回mid，但为了防溢出，这样写，mid === x / mid
    3.3、如果mid平方小于x，则找小了，left右移到mid处
    3.4、如果mid平方大于x，则找大了，right左移到mid处
4、循环结束还没返回结果的话，说明此时left紧挨着right了，答案就是他两之一
    4.1、如果left的平方小于x的话，则说明答案是right
    4.2、否则，返回left
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 1、边界条件预判，如果输入正整数x<=1，则返回x
  if (x <= 1) {
    return x;
  }

  // 2、创建两个指针left、right,分别初始化为1和x/2
  let left = 1;
  let right = x >> 1;

  //   3、while循环，当left紧挨着right时，就不需要二分了，即left+1===right时，停止循环，否则：
  while (left + 1 < right) {
    // 3.1、计算中间位置mid，采用防溢出+位运算（自带取整，且二进制运算高效）
    let mid = left + ((right - left) >> 1);

    // 3.2、如果mid * mid === x，则找到了，返回mid，但为了防溢出，这样写，mid === x / mid
    if (mid === x / mid) {
      return mid;
    } else if (mid < x / mid) {
      // 3.3、如果mid平方小于x，则找小了，left右移到mid处
      left = mid;
    } else {
      // 3.4、如果mid平方大于x，则找大了，right左移到mid处
      right = mid;
    }
  }

  // 4、循环结束还没返回结果的话，说明此时left紧挨着right了，答案就是他两之一
  //   4.1、如果right的平方大于x的话，则说明答案是left，即使left的平方小于x，因为最终是下取整，小是对的
  if (right > x / right) {
    return left;
  }
  //   4.2、否则，返回right
  return right;
};
