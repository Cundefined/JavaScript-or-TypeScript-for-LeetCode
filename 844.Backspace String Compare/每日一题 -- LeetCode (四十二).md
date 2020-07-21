# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第844题 )  比较含退格的字符串**
      
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。




​	  **示例 1:**

```javascript
输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
```
**示例 2:**
```javascript
输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
```
**示例 3:**
```javascript
输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
```
**示例 4:**
```javascript
输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/backspace-string-compare
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 创建两个指针i和j，分别遍历两个字符串，初始从末尾往前遍历

 2. 创建两个变量，分别记录S和T的退格数量

 3. 当S, T字符串都遍历完了，才退出循环，因为S, T可能长度不一致
 	3.1、先遍历处理S字符串，主要是对退格符的处理
 	

		 3.1.1、先判断当前字符是否为退格符，若是，则记录一下，同时把i指针前移一位
		 3.1.2、若不是退格符，且当前记录的退格符还未处理，就开始处理，退格符减1，i指针前移一位
		 3.1.3、若当前字符不是退格符，且之前的退格符都处理了，现在可以跳出当前循环，去遍历处理T字符串
      3.2、对S的处理跳出循环了，现在需要去遍历处理T字符串，也主要是对退格符的处理
      

		 3.2.1、先判断当前字符是否为退格符，若是，则记录一下，同时把j指针前移一位
		 3.2.2、若不是退格符，且当前记录的退格符还未处理，就开始处理，退格符减1，j指针前移一位
		 3.2.3、若当前字符不是退格符，且之前的退格符都处理了，现在可以跳出当前循环，去比较S和T的当前字符是否相等
		 
      3.3、比较S和T的当前字符是否相等，若存在字符不相等，返回false
    3.4、若当前字符相等，则两个字符串都需要把指针往前移动一位
      

      

 					
 5. 遍历完了两个字符串，还没返回false的话，说明是true

### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、创建两个指针i和j，分别遍历两个字符串，初始从末尾往前遍历
2、创建两个变量，分别记录S和T的退格数量
3、当S, T字符串都遍历完了，才退出循环，因为S, T可能长度不一致
    3.1、先遍历处理S字符串，主要是对退格符的处理
      3.1.1、先判断当前字符是否为退格符，若是，则记录一下，同时把i指针前移一位
      3.1.2、若不是退格符，且当前记录的退格符还未处理，就开始处理，退格符减1，i指针前移一位
      3.1.3、若当前字符不是退格符，且之前的退格符都处理了，现在可以跳出当前循环，去遍历处理T字符串
    3.2、对S的处理跳出循环了，现在需要去遍历处理T字符串，也主要是对退格符的处理
      3.2.1、先判断当前字符是否为退格符，若是，则记录一下，同时把j指针前移一位
      3.2.2、若不是退格符，且当前记录的退格符还未处理，就开始处理，退格符减1，j指针前移一位
      3.2.3、若当前字符不是退格符，且之前的退格符都处理了，现在可以跳出当前循环，去比较S和T的当前字符是否相等
    3.3、比较S和T的当前字符是否相等，若存在字符不相等，返回false
    3.4、若当前字符相等，则两个字符串都需要把指针往前移动一位
4、遍历完了两个字符串，还没返回false的话，说明是true

*/

 /**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {

  // 1、创建两个指针i和j，分别遍历两个字符串，初始从末尾往前遍历
  let i = S.length - 1;
  let j = T.length - 1;

  // 2、创建两个变量，分别记录S和T的退格数量
  let backspaceS = 0;
  let backspaceT = 0;

  // 3、当S, T字符串都遍历完了，才退出循环，因为S, T可能长度不一致
  while (i >= 0 || j >= 0) {
    // 3.1、先遍历处理S字符串，主要是对退格符的处理
    while (i >= 0) {
      // 3.1.1、先判断当前字符是否为退格符，若是，则记录一下，同时把i指针前移一位
      if (S[i] === "#") {
        backspaceS++;
        i--;
      } else if (backspaceS > 0) {
        // 3.1.2、若不是退格符，且当前记录的退格符还未处理，就开始处理，退格符减1，i指针前移一位
        backspaceS--;
        i--;
      } else {
        // 3.1.3、若当前字符不是退格符，且之前的退格符都处理了，现在可以跳出当前循环，去遍历处理T字符串
        break;
      }
    }

    // 3.2、对S的处理跳出循环了，现在需要去遍历处理T字符串，也主要是对退格符的处理
    while (j >= 0) {
      // 3.2.1、先判断当前字符是否为退格符，若是，则记录一下，同时把j指针前移一位
      if (T[j] === "#") {
        backspaceT++;
        j--;
      } else if (backspaceT > 0) {
        // 3.2.2、若不是退格符，且当前记录的退格符还未处理，就开始处理，退格符减1，j指针前移一位
        backspaceT--;
        j--;
      } else {
        // 3.2.3、若当前字符不是退格符，且之前的退格符都处理了，现在可以跳出当前循环，去比较S和T的当前字符是否相等
        break;
      }
    }

    // 3.3、比较S和T的当前字符是否相等，若存在字符不相等，返回false
    if (S[i] !== T[j]) {
      return false;
    }

    // 3.4、若当前字符相等，则两个字符串都需要把指针往前移动一位
    i--;
    j--;
  }

  // 4、遍历完了两个字符串，还没返回false的话，说明是true
  return true;
};


```


### 2.2、TypeScript Solution

```javascript
function backspaceCompare(S: string, T: string): boolean {
  let i: number = S.length - 1;
  let j: number = T.length - 1;

  let backspaceS: number = 0;
  let backspaceT: number = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (S[i] === "#") {
        backspaceS++;
        i--;
      } else if (backspaceS > 0) {
        backspaceS--;
        i--;
      } else {
        break;
      }
    }

    while (j >= 0) {
      if (T[j] === "#") {
        backspaceT++;
        j--;
      } else if (backspaceT > 0) {
        backspaceT--;
        j--;
      } else {
        break;
      }
    }

    if (S[i] !== T[j]) {
      return false;
    }

    i--;
    j--;
  }

  return true;
}

```

