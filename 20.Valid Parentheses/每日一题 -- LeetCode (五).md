# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第20题 )  有效的括号**
       
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

 1. 左括号必须用相同类型的右括号闭合。
 2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

 **示例 1:**

```javascript
输入: "()"
输出: true
```
  **示例 2:**
```javascript
输入: "()[]{}"
输出: true
```
 **示例 3:**
```javascript
输入: "(]"
输出: false
```
 **示例 4:**
```javascript
输入: "([)]"
输出: false
```
 **示例 5:**
```javascript
输入: "{[]}"
输出: true
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 解题思路：字典 + 基于数组的栈
 * 1、创建一个Map字典,把匹配的括号字符放进去，左括号为键，右括号为值
 * 2、创建一个Stack栈（基于数组实现）,存放正确的右括号
 * 3、for循环遍历输入的字符串：
 *      3.1、对于每个字符，先查看map里是否有这个键，有的话，说明该字符是左括号，同时取出其应该对于的正确右括号（该键对应的值），push进stack中，等待与下一个字符比较
 *      3.2、若没有那个键，说明此字符是右括号，需要与stack栈顶的元素比较，pop（移除并返回栈顶元素）出来，看是否相等，若相等就继续遍历下一个字符，若不相等就返回false，终止循环
 * 4、循环结束后，如果stack不为空，说明还剩一些左括号没有闭合，就返回false，否则返回true



### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * 解题思路：字典 + 基于数组的栈
 * 1、创建一个Map字典,把匹配的括号字符放进去，左括号为键，右括号为值
 * 2、创建一个Stack栈（基于数组实现）,存放正确的右括号
 * 3、for循环遍历输入的字符串：
 *      3.1、对于每个字符，先查看map里是否有这个键，有的话，说明该字符是左括号，同时取出其应该对于的正确右括号（该键对应的值），push进stack中，等待与下一个字符比较
 *      3.2、若没有那个键，说明此字符是右括号，需要与stack栈顶的元素比较，pop（移除并返回栈顶元素）出来，看是否相等，若相等就继续遍历下一个字符，若不相等就返回false，终止循环
 * 4、循环结束后，如果stack不为空，说明还剩一些左括号没有闭合，就返回false，否则返回true
 */
var isValid = function(s) {
    // 1、创建一个Map字典,把匹配的括号字符放进去，左括号为键，右括号为值
    const map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");

    // 2、创建一个Stack栈（基于数组实现）,存放正确的右括号
    const stack = [];
    // 3、for循环遍历输入的字符串：
    for (let i = 0; i < s.length; i++) {
        // 3.1、对于每个字符，先查看map里是否有这个键，有的话，说明该字符是左括号，同时取出其应该对于的正确右括号（该键对应的值），push进stack中，等待与下一个字符比较
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        } else {
            // 3.2、若没有那个键，说明此字符是右括号，需要与stack栈顶的元素比较，pop（移除并返回栈顶元素）出来，看是否相等，若相等就继续遍历下一个字符，若不相等就返回false，终止循环
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;

};
```


### 2.2、TypeScript Solution

```javascript
function isValid(s: string): boolean {
    const map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');

    const stack: string[] = [];

    for (let i: number = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        } else {
            if(stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
};
```

