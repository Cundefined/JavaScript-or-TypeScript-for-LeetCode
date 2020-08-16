# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第232题 )  用栈实现队列**
       使用栈实现队列的下列操作：

 - push(x) -- 将一个元素放入队列的尾部。 
 - pop() -- 从队列首部移除元素。 
 - peek() -- 返回队列首部的元素。
 - empty() -- 返回队列是否为空。






 **示例 :**

```java
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);  
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false
```
说明:

 - 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty操作是合法的。 
 - 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 - 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-queue-using-stacks
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
```javascript
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
```

### 2.1、JavaScript Solution
```javascript
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
```

### 2.2、TypeScript Solution

```javascript
class MyQueue {
  inputStack: number[];
  outputStack: number[];
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  push(x: number): void {
    this.inputStack.push(x);
  }

  pop(): number {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length !== 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }

    return this.outputStack.pop();
  }

  peek(): number {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length !== 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }

    return this.outputStack[this.outputStack.length - 1];
  }

  empty(): boolean {
    if (this.inputStack.length === 0 && this.outputStack.length === 0) {
      return true;
    }

    return false;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

