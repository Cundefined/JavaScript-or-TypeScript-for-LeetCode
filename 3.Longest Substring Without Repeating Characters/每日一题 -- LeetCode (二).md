@[TOC](每日一题 -- LeetCode（二）)

# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第3题 )  无重复字符的最长子串**
      给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
	  **示例 1:**
	  

```javascript
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```
 **示例 2:**
```javascript
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```
 **示例 3:**
```javascript
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
解题方法:sliding window(滑动窗口/双指针)
 1. 创建一个set集合
 2. 创建两个指针：
 	2.1、第一个指针i随着for循环遍历字符串
 	2.2、第二个指针j指向字符串开头
 3. 遍历字符串，判断能否加入到set集合
 	 3.1、如果set中没有s[i],说明目前为止还没有重复的字符，就把s[i]添加到Set集合中
 	 3.2、如果set中有s[i]，说明发现重复的字符，则从set里开始删除s[j],并且递增j，而且再检查set里是否仍有s[i],有的话，重复3.2直到Set里没有s[i]为止
 	 3.3、重复3.1和3.2,直到遍历完整个字符串


### 2.1、JavaScript Solution

```javascript
/**
 * 解题思路:sliding window(滑动窗口/双指针)
 * 1、创建一个set集合
 * 2、创建两个指针：
 *      2.1、第一个指针i随着for循环遍历字符串
 *      2.2、第二个指针j指向字符串开头
 * 3、遍历字符串，判断能否加入到set集合
 *      3.1、如果set中没有s[i],说明目前为止还没有重复的字符，就把s[i]添加到Set集合中
 *      3.2、如果set中有s[i]，说明发现重复的字符，则从set里开始删除s[j],并且递增j，而且再检查set里是否仍有s[i],有的话，重复3.2直到Set里没有s[i]为止
 *      3.3、重复3.1和3.2,直到遍历完整个字符串
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 1、创建一个set集合
  const set = new Set();
  // 2、创建两个指针：
  let i = 0,
    j = 0,
    maxLength = 0;
  // 对输入字符串做判断，当传入空字符串时，return 0
  if (s.length === 0) {
    return 0;
  }
  // 3、遍历字符串，判断能否加入到set集合
  for (i; i < s.length; i++) {
    // 3.1、如果set中没有s[i],说明目前为止还没有重复的字符，就把s[i]添加到Set集合中
    if (!set.has(s[i])) {
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      // 3.2、如果set中有s[i]，说明发现重复的字符，则从set里开始删除s[j],并且递增j，而且再检查set里是否仍有s[i],有的话，重复3.2直到Set里没有s[i]为止
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength;
};


```


### 2.2、TypeScript Solution

```javascript
function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let i: number = 0, j:number = 0, maxLength:number = 0;

    if (s.length === 0) {
        return 0;
    } 
    
    for (i; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            maxLength = Math.max(maxLength, set.size);
        } else {
            while (set.has(s[i])) {
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    }

    return maxLength;
};
```
