# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第150题 )  逆波兰表达式求值**
      
   根据 逆波兰表示法，求表达式的值。

有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

 

**说明：**

 - 整数除法只保留整数部分。
 -  给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

 **示例 :**

```javascript
输入: ["2", "1", "+", "3", "*"]
输出: 9
解释: 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
```javascript
解题思路：栈
1、定义判断tokens元素是否为操作符的函数，直接利用字符串方法
2、定义计算函数，传入左右操作数和操作符，根据操作符来选择计算方式
3、创建栈（用数组模拟）
4、for循环遍历tokens数组：
    4.1、如果当前元素为运算符的话，则把栈顶的两个元素依次弹出作为左右操作数，计算后，把结果进栈
    4.2、否则，为数字的话，把当前字符串数字转成number类型后，进栈
5、循环结束后，栈中只剩下一个结果元素，直接出栈返回该结果
```

### 2.1、JavaScript Solution
```javascript
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
```



### 2.2、TypeScript Solution

```javascript
function evalRPN(tokens: string[]): number {
  function isOperator(tokensElement: string): boolean {
    return "+-*/".includes(tokensElement);
  }

  function calculate(
    leftNum: number,
    rightNum: number,
    operator: string
  ): number {
    switch (operator) {
      case "+":
        return leftNum + rightNum;
      case "-":
        return leftNum - rightNum;
      case "*":
        return leftNum * rightNum;
      default:
        return (leftNum / rightNum) | 0;
    }
  }

  let stack: Array<number> = [];

  for (let i: number = 0; i < tokens.length; i++) {
    if (!isOperator(tokens[i])) {
      stack.push(Number(tokens[i]));

    } else {
      let rightNum: number = stack.pop();
      let leftNum: number = stack.pop();

      stack.push(calculate(leftNum, rightNum, tokens[i]));
    }
  }

  return stack.pop();
}

```



