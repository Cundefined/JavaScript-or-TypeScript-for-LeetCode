# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第225题 )  用队列实现栈**
       使用队列实现栈的下列操作：

 - push(x) -- 元素 x 入栈 
 - pop() -- 移除栈顶元素 
 - top() -- 获取栈顶元素 
 - empty() -- 返回栈是否为空

**注意:**

 - 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is
   empty 这些操作是合法的。 
 - 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 ,
   只要是标准的队列操作即可。
 - 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-stack-using-queues
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。




## 2、解题思路
```javascript
1、在构造函数中，初始化成员变量，一个队列（数组模拟）
2、push方法：
  2.1、元素进入队列
3、pop方法：
  3.1、如果队列中有至少两个元素，则需要把除尾部外的元素依次移到队列尾部，再移除并返回头部元素
4、top方法：
  4.1、返回队尾元素
5、empty方法：
  5.1、返回队列长度是否为0
```


### 2.1、JavaScript Solution

```javascript
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
```

### 2.2、TypeScript Solution

```javascript
class MyStack {
  queue: Array<number | undefined>;
  constructor() {
    this.queue = [];
  }

  push(x: number | undefined): void {
    this.queue[this.queue.length] = x;
  }

  pop(): number | undefined {
    if (this.queue.length > 1) {
      for (let i = 0; i < this.queue.length - 1; i++) {
        this.push(this.queue.shift());
      }
    }
    return this.queue.shift();
  }

  top(): number | undefined {
    return this.queue[this.queue.length - 1];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```

