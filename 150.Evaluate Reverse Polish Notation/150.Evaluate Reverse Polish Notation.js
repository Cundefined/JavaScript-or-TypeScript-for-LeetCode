/*
解题思路：栈
1、定义判断tokens元素是否为操作符的函数，直接利用字符串方法
2、定义计算函数，传入左右操作数和操作符，根据操作符来选择计算方式
3、创建栈（用数组模拟）
4、for循环遍历tokens数组：
    4.1、如果当前元素为运算符的话，则把栈顶的两个元素依次弹出作为左右操作数，计算后，把结果进栈
    4.2、否则，为数字的话，把当前字符串数字转成number类型后，进栈
5、循环结束后，栈中只剩下一个结果元素，直接出栈返回该结果
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // 1、定义判断tokens元素是否为操作符的函数，直接利用字符串方法
  function isOperator(tokensElement) {
    return "+-*/".includes(tokensElement);
  }

  // 2、定义计算函数，传入左右操作数和操作符，根据操作符来选择计算方式
  function calculate(leftNum, rightNum, operator) {
    switch (operator) {
      case "+":
        return leftNum + rightNum;
      case "-":
        return leftNum - rightNum;
      case "*":
        return leftNum * rightNum;
      default:
        //   和0去按位或，可以实现直接去掉小数部分，而不是向上、向下取整
        return (leftNum / rightNum) | 0;
    }
  }

  // 3、创建栈（用数组模拟）
  let stack = [];

  // 4、for循环遍历tokens数组：
  for (let i = 0; i < tokens.length; i++) {
    // 4.1、如果当前元素为运算符的话，则把栈顶的两个元素依次弹出作为左右操作数，计算后，把结果进栈
    if (isOperator(tokens[i])) {
      let rightNum = stack.pop();
      let leftNum = stack.pop();

      stack.push(calculate(leftNum, rightNum, tokens[i]));
    } else {
      // 4.2、否则，为数字的话，把当前字符串数字转成number类型后，进栈
      stack.push(Number(tokens[i]));
    }
  }

  // 5、循环结束后，栈中只剩下一个结果元素，直接出栈返回该结果
  return stack.pop();
};
