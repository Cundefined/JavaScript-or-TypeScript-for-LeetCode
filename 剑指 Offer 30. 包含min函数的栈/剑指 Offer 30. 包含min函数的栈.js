/*
解题思路：基于对象数组的最小栈【不用创建辅助栈，优化空间复杂度】
1、在构造函数中，初始化成员变量，一个对象数组，用于构造最小栈,对象中保存当前元素和当前最小值
2、push方法：
  2.1、元素入栈，如果栈为空，直接把对象入栈，不为空则需要比较对象中的min属性后，再加入对象
3、pop方法：
  3.1、元素出栈，整个对象出栈
4、top方法：
  4.1、返回栈顶对象的element属性
5、getMin方法：
  5.1、返回栈顶对象的min属性
*/
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.minStackItems = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (!this.minStackItems.length) {
    this.minStackItems.push({ element: x, min: x });
  } else {
    this.minStackItems.push({
      element: x,
      min: Math.min(x, this.minStackItems[this.minStackItems.length - 1].min),
    });
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStackItems.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (!this.minStackItems.length) {
    return undefined;
  } else {
    return this.minStackItems[this.minStackItems.length - 1].element;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  if (!this.minStackItems.length) {
    return undefined;
  } else {
    return this.minStackItems[this.minStackItems.length - 1].min;
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
