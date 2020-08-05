# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***


## 1、题目要求
**( LeetCode-第2题 )  两数相加**
       

实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。




 **示例 1:**

```javascript
输入: haystack = "hello", needle = "ll"
输出: 2
```
 **示例 2:**
```java
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```
**说明:**

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-strstr
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
```javascript
1、边界条件预判:
    1.1、如果子字符串为空，则返回0
    1.2、如果母字符串短于子字符串，返回-1
2、创建变量，保存两个字符串长度之差，来限制遍历范围
3、for循环遍历母字符串：
    3.1、如果子字符串等于母字符串的某个子字符串，则说明包含，返回该起始索引
4、遍历结束，还没返回的话，说明没有，返回-1
```

### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 1.1、如果子字符串为空，则返回0
  if (needle.length === 0) {
    return 0;
  }
  // 1.2、如果母字符串短于子字符串，返回-1
  if (haystack.length < needle.length) {
    return -1;
  }

  // 2、创建变量，保存两个字符串长度之差，来限制遍历范围
  let limit = haystack.length - needle.length;

  // 3、for循环遍历母字符串：
  for (let i = 0; i <= limit; i++) {
    // 3.1、如果子字符串等于母字符串的某个子字符串，则说明包含，返回该起始索引
    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  // 4、遍历结束，还没返回的话，说明没有，返回-1
  return -1;
};
```


### 2.2、TypeScript Solution

```javascript
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  let limit: number = haystack.length - needle.length;


  for (let i: number = 0; i <= limit; i++) {

    if (needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  return -1;
};
```
### 2.3、Java Solution
```java
class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.length() == 0) {
            return 0;
        }

        if (haystack.length() < needle.length()) {
            return -1;
        }

        int limit = haystack.length() - needle.length();

        for (int i = 0; i <= limit; i++) {
            if (needle.equals(haystack.substring(i, i + needle.length()))) {
                return i;
            }
        }

        return -1;
    }
}
```

