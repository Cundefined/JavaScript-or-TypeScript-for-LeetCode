# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第796题 )  旋转字符串**
       
给定两个字符串, A 和 B。

A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。如果在若干次旋转操作之后，A 能变成B，那么返回True。



​	  **示例 1:**

```javascript
输入: A = 'abcde', B = 'cdeab'
输出: true
```
**示例 2:**
```javascript
输入: A = 'abcde', B = 'abced'
输出: false
```
**注意：**

 - A 和 B 长度不超过 100。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
解题思路：周期字符串
 1. 边界条件预判，如果A和B的长度不相等，那肯定旋转得不到，直接返回false
 

 2. A字符串拼接自己，变成两个周期的字符串，只要旋转能得到B，那B肯定是这个周期字符串的子字符串
 	
 3. 返回B是否属于该周期字符串的子字符串
 

### 2.1、JavaScript Solution

```javascript
/*
解题思路：周期字符串
1、边界条件预判，如果A和B的长度不相等，那肯定旋转得不到，直接返回false
2、A字符串拼接自己，变成两个周期的字符串，只要旋转能得到B，那B肯定是这个周期字符串的子字符串
3、返回B是否属于该周期字符串的子字符串
*/

 /**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {

  // 1、边界条件预判，如果A和B的长度不相等，那肯定旋转得不到，直接返回false
  if (A.length !== B.length) {
    return false;
  }

  // 2、A字符串拼接自己，变成两个周期的字符串，只要旋转能得到B，那B肯定是这个周期字符串的子字符串
  const periodicStr = A + A;

  // 3、返回B是否属于该周期字符串的子字符串
  return periodicStr.includes(B);
};
```


### 2.2、TypeScript Solution

```javascript
function rotateString(A: string, B: string): boolean {
    if (A.length !== B.length) {
        return false;
    }

    const periodicStr: string = A + A;

    return periodicStr.includes(B);
};
```

