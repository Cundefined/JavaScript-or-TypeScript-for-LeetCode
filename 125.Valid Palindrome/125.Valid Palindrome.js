/*
解题思路：
1、先创建一个变量，保存去除空格等特殊字符以后的新字符串
2、利用正则表达式匹配所有数字和字母以外的字符，去除空格啥的（在新字符串上操作，避免直接修改原字符串）
3、预判，如果新字符串的长度<=1的话，那肯定是回文，直接返回true
4、创建两个指针left、right，初始时，left指向字符串开头，后面会向右移动，right指向结尾，后面会向左移动
5、开始while循环，若left<right，则一直判断，一直移动：
    5.1、如果一旦发现left和right指向的两个字符不相等，那就直接返回false，不用再循环了
    5.2、否则，就继续移动指针
6、全部遍历结束后，说明是回文，返回true
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 1、先创建一个变量，保存去除空格等特殊字符以后的新字符串
  let newStr = "";
  // 2、利用正则表达式匹配所有数字和字母以外的字符，去除空格啥的（在新字符串上操作，避免直接修改原字符串）
  // \w 相当于 [a-zA-Z0-9] 意思就是匹配大小写英文字母和数字。^取反
  newStr = s.toLowerCase().replace(/[\W_]/g, "");

  // 3、预判，如果新字符串的长度<=1的话，那肯定是回文，直接返回true
  if (newStr.length <= 1) {
    return true;
  }

  // 4、创建两个指针left、right，初始时，left指向字符串开头，后面会向右移动，right指向结尾，后面会向左移动
  let left = 0;
  let right = newStr.length - 1;

  // 5、开始while循环，若left<right，则一直判断，一直移动：
  while (left < right) {
    //   5.1、如果一旦发现left和right指向的两个字符不相等，那就直接返回false，不用再循环了
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    // 5.2、否则，就继续移动指针
    left++;
    right--;
  }

  // 6、全部遍历结束后，说明是回文，返回true
  return true;
};
