@[TOC](每日一题 -- LeetCode（三）)

# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第5题 ) 最长回文子串**
       给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
	  **示例 1:**
	  

```javascript
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```
 **示例 2:**
```javascript
输入: "cbbd"
输出: "bb"
```
题目来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题方法:中心扩散思想（中心对称就是回文）
 1. 预判，输入字符串长度<=1时，直接返回该字符串
 2. 定义两个变量
 	2.1、start变量，记录当前找到的最大回文字符串的起始位置
 	2.2、maxLength变量，记录最大回文字符串的长度（那终止位置就是start+maxLength） 
 3. 创建一个中心扩散算法的函数，函数需要判断4个条件：
 	3.1、判断中心的左边是否越界
 	3.2、判断中心的右边是否越界
 	3.3、判断右边索引是否大于等于左边索引
	3.4、判断左边字符是否等于右边字符
	3.5、若同时满足上述3个条件：则需要再判断最大回文字符串的长度是否需要更新，更新后，left--,right++
 4. 遍历整个字符串，每个中心位置处都需要扩散两边（调用中心扩散函数两次）
 	4.1、第一遍扩散 left=i-1, right=i+1 (奇数个字符，中心位置存在)
 	4.2、第二遍扩散 left=i, right=i+1（偶数个字符，中心位置不存在）


### 2.1、JavaScript Solution

```javascript
/**
 * 解题方法:中心扩散思想（中心对称就是回文嘛）
 * 1、预判，输入字符串长度<=1时，直接返回该字符串
 * 2、定义两个变量：
 *      2.1、start变量，记录当前找到的最大回文字符串的起始位置
 *      2.2、maxLength变量，记录最大回文字符串的长度（那终止位置就是start+maxLength）
 * 3、创建一个中心扩散算法的函数，函数需要判断4个条件：
 *      3.1、判断中心的左边是否越界
 *      3.2、判断中心的右边是否越界
 *      3.3、判断右边索引是否大于等于左边索引
 *      3.4、判断左边字符是否等于右边字符
 *      3.5、若同时满足上述3个条件：则需要再判断最大回文字符串的长度是否需要更新，更新后，left--,right++
 * 4、遍历整个字符串，每个中心位置处都需要扩散两边（调用中心扩散函数两次）
 *      4.1、第一遍扩散 left=i-1, right=i+1 (奇数个字符，中心位置存在)
 *      4.2、第二遍扩散 left=i, right=i+1（偶数个字符，中心位置不存在）
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 1、预判，输入字符串长度为空或者<=1时，直接返回该字符串
  if (s.length <= 1) {
    return s;
  }
  // 2、定义两个变量：
  // 2.1、start变量，记录当前找到的最大回文字符串的起始位置
  let start = 0;
  // 2.2、maxLength变量，记录最大回文字符串的长度（那终止位置就是start+maxLength）
  // maxLength至少为1嘛
  let maxLength = 1;

  // 3、创建一个中心扩散算法的函数，函数需要判断4个条件
  function expandAroundCenter(left, right) {
    // 3.1、判断中心的左边是否越界
    // 3.2、判断中心的右边是否越界
    // 3.3、判断右边索引是否大于等于左边索引
    // 3.4、左边字符是否等于右边字符
    while (
      left >= 0 &&
      right <= s.length - 1 &&
      right >= left &&
      s[left] === s[right]
    ) {
      // 若同时满足上述3个条件：则需要再判断最大回文字符串的长度是否需要更新，更新后，left--,right++
      if (right - left + 1 > maxLength) {
        // 更新变量
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }

  // 4、遍历整个字符串，每个中心位置处都需要扩散两边（调用中心扩散函数两次）
  for (let i = 0; i < s.length; i++) {
    // 4.1、第一遍扩散 left=i-1, right=i+1
    expandAroundCenter(i - 1, i + 1);
    // 4.2、第二遍扩散 left=i, right=i+1
    expandAroundCenter(i, i + 1);
  }

  return s.substring(start, start + maxLength);
};

```


### 2.2、TypeScript Solution

```javascript
function longestPalindrome(s: string): string {
    if (s.length <= 1) {
        return s;
    }

    let start: number = 0;
    let maxLength: number = 1;

    function expandAroundCenter(left: number, right: number): void{
        while (left >= 0 && right <= s.length - 1 && right >= left && s[left] === s[right]) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }


    for (let i: number = 0; i < s.length; i++) {
        expandAroundCenter(i, i + 1);
        expandAroundCenter(i - 1, i + 1);
        }
     

     return s.substring(start, start + maxLength);

};
```
