var CQueue = function () {
  // 在构造函数中，初始化成员变量，两个栈（数组模拟），分别为输入栈和输出栈
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackIn.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.stackIn.length && !this.stackOut.length) {
    return -1;
  }
  if (!this.stackOut.length) {
    while (this.stackIn.length) {
      this.stackOut.push(this.stackIn.pop());
    }
  }

  return this.stackOut.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
