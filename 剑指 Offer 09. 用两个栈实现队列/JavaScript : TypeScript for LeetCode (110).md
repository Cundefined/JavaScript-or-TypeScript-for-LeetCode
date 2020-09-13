# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 09 )  用两个栈实现队列**](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/)
      




## 2、解题思路
```javascript
两个栈（数组模拟），分别为输入栈和输出栈
注意：出队时，注意检查输出栈是否为空
	 1、为空的话，就把输入栈的所有内容全部倒入输出栈；
	 2、不为空的话，不能直接倒入，因为输出栈的优先级都		  
	 	低于输入栈，应该等输出栈全部出队后，才能倒入
```


### 2.1、JavaScript Solution

```javascript
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

