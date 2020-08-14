# **JavaScript / TypeScript for LeetCode** 

- 谨以此仓库记录LeetCode刷题历程【2020.6.27 -> undefined】
- 使用JavaScript、TypeScript语言解决数据结构和算法问题
- 锻炼编程能力，培养算法思维，相互学习，共同进步



## 文件结构：

​	以155.Min Stack2为例：

```javascript
.
└── 155.Min Stack2   #LeetCode第150题 
        ├── JavaScript / TypeScript for LeetCode (五十九).md   #存放此题博客文档
        ├── 155.Min Stack2.js   #存放此题JavaScript Solution
        └── 155.Min Stack2.ts   #存放此题TypeScript Solution
```



#### 其中，“JavaScript / TypeScript for LeetCode (五十九).md”具体内容如下所示：

***亦可前往博客地址：https://blog.csdn.net/weixin_47771057/article/details/107977473***

------

# 是差点运气，可我一直在努力！

**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求

**( LeetCode-第155题 )  最小栈**
       设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

	push(x) —— 将元素 x 推入栈中。
	pop() —— 删除栈顶的元素。
	top() —— 获取栈顶元素。
	getMin() —— 检索栈中的最小元素。




 **示例 :**

```java
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

**提示：**

	pop、top 和 getMin 操作总是在 非空栈 上调用。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/min-stack
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

**方法一：基于数组的最小栈**

```javascript
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
```

**方法二：基于对象数组的最小栈【不用创建辅助栈了】**

```javascript
1、在构造函数中，初始化成员变量，一个对象数组，用于构造最小栈,对象中保存当前元素和当前最小值
2、push方法：
  2.1、元素入栈，如果栈为空，直接把对象入栈，不为空则需要比较对象中的min属性后，再加入对象
3、pop方法：
  3.1、元素出栈，整个对象出栈
4、top方法：
  4.1、返回栈顶对象的element属性
5、getMin方法：
  5.1、返回栈顶对象的min属性
```

### 2.1、JavaScript Solution

**方法一：基于数组的最小栈**

```javascript
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
```

**方法二：基于对象数组的最小栈【不用创建辅助栈了】**

```javascript
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  // 1、在构造函数中，初始化成员变量，一个对象数组，用于构造最小栈,对象中保存当前元素和当前最小值
  this.minStackItems = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  // 2.1、元素入栈，如果栈为空，直接把对象入栈，不为空则需要比较对象中的min属性后，再加入对象
  if (this.minStackItems.length === 0) {
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
  // 3.1、元素出栈
  this.minStackItems.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  // 4.1、返回栈顶元素
  return this.minStackItems[this.minStackItems.length - 1].element;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // 5.1、返回栈顶对象的min属性
  return this.minStackItems[this.minStackItems.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

### 2.2、TypeScript Solution

**方法一：基于数组的最小栈**

```javascript
class MinStack {
  minStackItems: Array<number>;
  assistStackItems: Array<number>;
  constructor() {
    this.minStackItems = [];
    this.assistStackItems = [];
  }

  push(x: number): void {
    this.minStackItems.push(x);
    if (
      this.assistStackItems.length === 0 ||
      x <= this.assistStackItems[this.assistStackItems.length - 1]
    ) {
      this.assistStackItems.push(x);
    }
  }

  pop(): void {
    let tempOut: any = this.minStackItems.pop();
    if (this.assistStackItems[this.assistStackItems.length - 1] === tempOut) {
      this.assistStackItems.pop();
    }
  }

  top(): number {
    return this.minStackItems[this.minStackItems.length - 1];
  }

  getMin(): number {
    return this.assistStackItems[this.assistStackItems.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```

**方法二：基于对象数组的最小栈【不用创建辅助栈了】**

```javascript
interface MinStackElementObj {
  element: number;
  min: number;
}

class MinStack {
  minStackItems: Array<MinStackElementObj>;
  constructor() {
    this.minStackItems = [];
  }

  push(x: number): void {
    let elementObj: MinStackElementObj = {
      element: x,
      min:
        this.minStackItems.length === 0
          ? x
          : Math.min(x, this.minStackItems[this.minStackItems.length - 1].min),
    };

    this.minStackItems.push(elementObj);
  }

  pop(): void {
    this.minStackItems.pop();
  }

  top(): number {
    return this.minStackItems[this.minStackItems.length - 1].element;
  }

  getMin(): number {
    return this.minStackItems[this.minStackItems.length - 1].min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

```



------

