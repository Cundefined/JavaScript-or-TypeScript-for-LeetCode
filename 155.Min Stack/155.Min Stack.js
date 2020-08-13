/*
解题思路：方法一、基于数组的最小栈
1、在构造函数中，初始化成员变量，两个数组，分别用于构造最小栈和辅助栈
2、push方法：
  2.1、元素入栈
  2.2、如果辅助栈为空或者当前元素小于等于辅助栈的栈顶元素，就把当前元素也加入到辅助栈
3、pop方法：
  3.1、元素出栈，并保存供后续判断使用
  3.2、如果辅助栈的栈顶元素等于出栈的元素，说明删除了最小元素，此时也要删除辅助栈顶元素
4、top方法：
  4.1、返回最小栈栈顶元素
5、getMin方法：
  5.1、返回辅助栈栈顶元素
*/
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // 1、在构造函数中，初始化成员变量，两个数组，分别用于构造最小栈和辅助栈
  this.minStackItems = [];
  this.assistStackItems = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  // 2.1、元素入栈
  this.minStackItems.push(x);
  // 2.2、如果辅助栈为空或者当前元素小于等于辅助栈的栈顶元素，就把当前元素也加入到辅助栈
  if (
    this.assistStackItems.length === 0 ||
    x <= this.assistStackItems[this.assistStackItems.length - 1]
  ) {
    this.assistStackItems.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 3.1、元素出栈，并保存供后续判断使用
  let tempOut = this.minStackItems.pop();
  // 3.2、如果辅助栈的栈顶元素等于出栈的元素，说明删除了最小元素，此时也要删除辅助栈顶元素
  if (this.assistStackItems[this.assistStackItems.length - 1] === tempOut) {
    this.assistStackItems.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // 4.1、返回最小栈栈顶元素
  return this.minStackItems[this.minStackItems.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // 5.1、返回辅助栈栈顶元素
  return this.assistStackItems[this.assistStackItems.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
