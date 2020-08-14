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
