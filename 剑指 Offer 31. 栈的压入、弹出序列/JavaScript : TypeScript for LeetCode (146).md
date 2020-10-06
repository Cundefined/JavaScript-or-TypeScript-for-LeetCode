# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 31 )  栈的压入、弹出序列**](https://leetcode-cn.com/problems/zhan-de-ya-ru-dan-chu-xu-lie-lcof/)
      


## 2、解题思路
```javascript
1、预判
2、创建栈，数组模拟
3、pushed第一个无论如何都得先进栈
4、创建两个指针，p1负责遍历pushed序列，让元素入栈，p2负责遍历popped序列，让元素出栈
5、遍历完了，还没返回，说明顺序没问题
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  //1、预判
  if (pushed.length !== popped.length) {
    return false;
  }

  //2、创建栈，数组模拟
  const stack = [];

  //3、pushed第一个无论如何都得先进栈
  stack.push(pushed[0]);

  //4、创建两个指针
  //p1负责遍历pushed序列，让元素入栈
  let p1 = 1;
  //p2负责遍历popped序列，让元素出栈
  let p2 = 0;
  for (p2; p2 < popped.length; p2++) {
    //当发现p2指向的元素不是当前栈顶元素，说明还不能弹出得到该元素，需要继续将pushed入栈
    while (popped[p2] !== stack[stack.length - 1] && p1 <= pushed.length - 1) {
      stack.push(pushed[p1++]);
    }
    //否则，发现p2指向的元素是当前栈顶元素，直接将他出栈，且p2往后继续遍历
    if (popped[p2] === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }

    //否则，运行到这里，说明p1 > pushed.length - 1，即pushed已经遍历完了，还没找到与当前栈顶元素相同的p2
    return false;
  }

  //5、遍历完了，还没返回，说明顺序没问题
  return true;
};
```

### 2.2、TypeScript Solution

```javascript
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  //1、预判
  if (pushed.length !== popped.length) {
    return false;
  }

  //2、创建栈，数组模拟
  const stack: number[] = [];

  //3、pushed第一个无论如何都得先进栈
  stack.push(pushed[0]);

  //4、创建两个指针
  //p1负责遍历pushed序列，让元素入栈
  let p1: number = 1;
  //p2负责遍历popped序列，让元素出栈
  let p2: number = 0;
  for (p2; p2 < popped.length; p2++) {
    //当发现p2指向的元素不是当前栈顶元素，说明还不能弹出得到该元素，需要继续将pushed入栈
    while (popped[p2] !== stack[stack.length - 1] && p1 <= pushed.length - 1) {
      stack.push(pushed[p1++]);
    }
    //否则，发现p2指向的元素是当前栈顶元素，直接将他出栈，且p2往后继续遍历
    if (popped[p2] === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }

    //否则，运行到这里，说明p1 > pushed.length - 1，即pushed已经遍历完了，还没找到与当前栈顶元素相同的p2
    return false;
  }

  //5、遍历完了，还没返回，说明顺序没问题
  return true;
}
```

