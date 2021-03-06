/*
解题思路：基于两个栈实现队列
1、在构造函数中，初始化成员变量，两个栈（数组模拟），分别为输入栈和输出栈
2、push方法：
  2.1、元素进入输入栈
3、pop方法：
    注意：只有输出栈为空时，才能一次性把输入栈元素转移过去，不然队列就会出现优先级混乱
  3.1、while循环把输入栈的所有元素转移到输出栈
  3.2、弹出输出栈栈顶元素，并返回
4、peek方法：
    注意：只有输出栈为空时，才能一次性把输入栈元素转移过去，不然队列就会出现优先级混乱
  4.1、while循环把输入栈的所有元素转移到输出栈
  4.2、查看输出栈栈顶元素，并返回
5、empty方法：
  5.1、如果输入栈和输出栈都为空的话，队列肯定为空，返回true，否则，返回false
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  // 1、在构造函数中，初始化成员变量，两个栈（数组模拟），分别为输入栈和输出栈
  this.inputStack = [];
  this.outputStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  //   2.1、元素进入输入栈
  this.inputStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outputStack.length === 0) {
    //   3.1、while循环把输入栈的所有元素转移到输出栈
    while (this.inputStack.length !== 0) {
      this.outputStack.push(this.inputStack.pop());
    }
  }

  //   3.2、弹出输出栈栈顶元素，并返回
  return this.outputStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outputStack.length === 0) {
    //   4.1、while循环把输入栈的所有元素转移到输出栈
    while (this.inputStack.length !== 0) {
      this.outputStack.push(this.inputStack.pop());
    }
  }
  //   4.2、查看输出栈栈顶元素，并返回
  return this.outputStack[this.outputStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  //   5.1、如果输入栈和输出栈都为空的话，队列肯定为空，返回true，否则，返回false
  if (this.inputStack.length === 0 && this.outputStack.length === 0) {
    return true;
  }

  return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
