# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第680题 )  验证回文字符串 Ⅱ**
       
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。


​	  **示例 1:**

```javascript
输入: "aba"
输出: True
```
**示例 2:**
```javascript
输入: "abca"
输出: True
解释: 你可以删除c字符。
```
**注意:**

 1. 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：参考125题 验证回文字符串
 1. 预判，如果新字符串的长度<=1的话，那肯定是回文，直接返回true
 

 2. 封装判断是否为回文的函数，后续调用

 3. 创建两个指针left、right，初始时，left指向字符串开头，后面会向右移动，right指向结尾，后面会向左移动

 4. 开始while循环，若left<right，则一直判断，一直移动：
 	4.1、如果遇见对称不相等的，则跳过左边一个数，再接着进行回文验证，或者跳过右边一个数，再接着进行回文验证，只要有一种返回true，那说明删除一个字符后，仍然可以成为回文字符串
    4.2、否则，就继续移动指针
   

 5. 全部遍历结束后，说明是回文，返回true

### 2.1、JavaScript Solution

```javascript
/*
解题思路：参考125题 验证回文字符串
1、预判，如果新字符串的长度<=1的话，那肯定是回文，直接返回true
2、封装判断是否为回文的函数，后续调用
3、创建两个指针left、right，初始时，left指向字符串开头，后面会向右移动，right指向结尾，后面会向左移动
4、开始while循环，若left<right，则一直判断，一直移动：
    4.1、如果遇见对称不相等的，则跳过左边一个数，再接着进行回文验证，或者跳过右边一个数，再接着进行回文验证，只要有一种返回true，那说明删除一个字符后，仍然可以成为回文字符串
    4.2、否则，就继续移动指针
5、全部遍历结束后，说明是回文，返回true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  // 1、预判，如果新字符串的长度<=1的话，那肯定是回文，直接返回true
  if (s.length <= 1) {
    return true;
  }

  // 2、创建判断是否为回文的函数，后续调用
  function isPalindrome(left, right) {
    // 开始while循环，若left<right，则一直判断，一直移动：
    while (left < right) {
      // 如果一旦发现left和right指向的两个字符不相等，那就直接返回false，不用再循环了
      if (s[left] !== s[right]) {
        return false;
      }
      // 否则，就继续移动指针
      left++;
      right--;
    }

    // 4、全部遍历结束后，说明是回文，返回true
    return true;
  }

  // 3、创建两个指针left、right，初始时，left指向字符串开头，后面会向右移动，right指向结尾，后面会向左移动
  let left = 0;
  let right = s.length - 1;

  // 4、开始while循环，若left<right，则一直判断，一直移动：
  while (left < right) {
    //   4.1、如果遇见对称不相等的，则跳过左边一个数，再接着进行回文验证，或者跳过右边一个数，
    //   再接着进行回文验证，只要有一种返回true，那说明删除一个字符后，仍然可以成为回文字符串
    if (s[left] !== s[right]) {
      const result =
        isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
      return result;
    }

    // 4.2、否则，就继续移动指针
    left++;
    right--;
  }

  // 5、全部遍历结束后，说明是回文，返回true
  return true;
};
```


### 2.2、TypeScript Solution

```javascript
 function validPalindrome(s: string): boolean {
     if (s.length <= 1) {
         return true;
     }

     function isPalindrome (left: number, right: number): boolean {
         while (left < right) {
             if (s[left] !== s[right]) {
                 return false;
             }

             left++;
             right--;

         }

         return true;
     }

     let left: number = 0;
     let right: number = s.length - 1;

     while (left < right) {
         if (s[left] !== s[right]) {
             const skip: boolean = isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
             return skip;
         }

         left++;
         right--;

     }

     return true;
 }

```

