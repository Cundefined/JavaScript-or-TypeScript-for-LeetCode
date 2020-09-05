# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第567题 )  字符串的排列**](https://leetcode-cn.com/problems/permutation-in-string/)
       




## 2、解题思路
**方法：滑动窗口**
```javascript
注意：此题不必关注s1的排列方式，而是要关注其数量，比如s1="abc",
     则只需要在s2中找到长度为3且包含1个a、1个b、1个c的子串即可
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;

  //创建连个数组，分别存储s1和s2中26个字符存在的情况，记录字符对应的个数
  // 0~26的位置分别放置a~z
  //后面只需要判断两个数组是否相等即可
  const charArr1 = new Array(26).fill(0);
  const charArr2 = new Array(26).fill(0);

  // 判断两数组是否相等
  function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  }

  // 计算两个字符的ASCII码差值
  function asciiCodeDiff(char1, char2) {
    return char1.charCodeAt() - char2.charCodeAt();
  }

  // 先记录s1字符分布情况
  for (const char of s1) {
    charArr1[asciiCodeDiff(char, "a")]++;
  }

  //从左到右依次滑动窗口，判断窗口包含的子字符串的字符分布charArr2是否和charArr1一致
  for (let i = 0; i < len2; i++) {
    //当i - len1>= 0说明窗口大小已到上限，右边界i不能扩张了，此时左边界i-len1收缩（把左边界记录字符个数减掉）
    if (i - len1 >= 0) {
      charArr2[asciiCodeDiff(s2[i - len1], "a")]--;
    }

    // 还没到窗口大小的话，记录窗口内的字符分布
    charArr2[asciiCodeDiff(s2[i], "a")]++;

    if (isEqual(charArr1, charArr2)) {
      return true;
    }
  }

  return false;
};
```

### 2.2、TypeScript Solution

```javascript
function checkInclusion(s1: string, s2: string): boolean {
  const len1: number = s1.length;
  const len2: number = s2.length;

  const charArr1: number[] = new Array(26).fill(0);
  const charArr2: number[] = new Array(26).fill(0);

  function isEqual(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
      return false;
    } else {
      for (let i: number = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
    }
    return true;
  }

  function asciiCodeDiff(char1: string, char2: string): number {
    return char1.charCodeAt(0) - char2.charCodeAt(0);
  }

  for (const char of s1) {
    charArr1[asciiCodeDiff(char, "a")]++;
  }

  for (let i: number = 0; i < len2; i++) {

    if (i - len1 >= 0) {
      charArr2[asciiCodeDiff(s2[i - len1], "a")]--;
    }

    charArr2[asciiCodeDiff(s2[i], "a")]++;

    if (isEqual(charArr1, charArr2)) {
      return true;
    }
  }

  return false;
}
```

