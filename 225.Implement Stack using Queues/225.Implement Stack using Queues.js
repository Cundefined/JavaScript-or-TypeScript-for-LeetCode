/*
解题思路：基于一个队列实现栈
1、在构造函数中，初始化成员变量，一个队列（数组模拟）
2、push方法：
  2.1、元素进入队列
3、pop方法：
  3.1、如果队列中有至少两个元素，则需要把除尾部外的元素依次移到队列尾部，再移除并返回头部元素
4、top方法：
  4.1、返回队尾元素
5、empty方法：
  5.1、返回队列长度是否为0
*/

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  // 1、在构造函数中，初始化成员变量，一个队列（数组模拟）
  this.queue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  //   2.1、元素进入队列
  this.queue[this.queue.length] = x;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  //   3.1、如果队列中有至少两个元素，则需要把除尾部外的元素依次移到队列尾部，再移除并返回头部元素
  if (this.queue.length > 1) {
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }
  return this.queue.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  //   4.1、返回队尾元素
  return this.queue[this.queue.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  //   5.1、返回队列长度是否为0
  return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
