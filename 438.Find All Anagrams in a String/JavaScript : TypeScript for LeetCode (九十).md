﻿# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第438题 )  找到字符串中所有字母异位词**](https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/)
      


## 2、解题思路
**方法：滑动窗口**
```javascript
注意：此题不必关注p的排列方式，而是要关注其数量，比如p="abc",
     则只需要在s中找到长度为3且包含1个a、1个b、1个c的子串即可
参考：567.Permutation in String
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const lenS = s.length;
  const lenP = p.length;

  const res = [];

  //创建两个数组，分别存储s和p中26个字符存在的情况，记录字符对应的个数
  // 0~26的位置分别放置a~z
  //后面只需要判断两个数组是否相等即可
  const charArrS = new Array(26).fill(0);
  const charArrP = new Array(26).fill(0);

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

  // 先记录p字符分布情况
  for (const char of p) {
    charArrP[asciiCodeDiff(char, "a")]++;
  }

  //从左到右依次滑动窗口，判断窗口包含的子字符串的字符分布charArrP是否和charArrS一致
  for (let i = 0; i < lenS; i++) {
    //当i - lenP>= 0说明窗口大小已到上限，右边界i不能扩张了，此时左边界i-lenP收缩（把左边界记录字符个数减掉）
    if (i - lenP >= 0) {
      charArrS[asciiCodeDiff(s[i - lenP], "a")]--;
    }

    // 还没到窗口大小的话，记录窗口内的字符分布
    charArrS[asciiCodeDiff(s[i], "a")]++;

    if (isEqual(charArrS, charArrP)) {
      res.push(i - lenP + 1);
    }
  }

  return res;
};
```

### 2.2、TypeScript Solution

```javascript
function findAnagrams(s: string, p: string): number[] {
  const lenS: number = s.length;
  const lenP: number = p.length;

  const res: number[] = [];

  //创建两个数组，分别存储s和p中26个字符存在的情况，记录字符对应的个数
  // 0~26的位置分别放置a~z
  //后面只需要判断两个数组是否相等即可
  const charArrS: number[] = new Array(26).fill(0);
  const charArrP: number[] = new Array(26).fill(0);

  // 判断两数组是否相等
  function isEqual(arr1: number[], arr2: number[]): boolean {
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
  function asciiCodeDiff(char1: string, char2: string): number {
    return char1.charCodeAt(0) - char2.charCodeAt(0);
  }

  // 先记录p字符分布情况
  for (const char of p) {
    charArrP[asciiCodeDiff(char, "a")]++;
  }

  //从左到右依次滑动窗口，判断窗口包含的子字符串的字符分布charArrP是否和charArrS一致
  for (let i: number = 0; i < lenS; i++) {
    //当i - lenP>= 0说明窗口大小已到上限，右边界i不能扩张了，此时左边界i-lenP收缩（把左边界记录字符个数减掉）
    if (i - lenP >= 0) {
      charArrS[asciiCodeDiff(s[i - lenP], "a")]--;
    }

    // 还没到窗口大小的话，记录窗口内的字符分布
    charArrS[asciiCodeDiff(s[i], "a")]++;

    if (isEqual(charArrS, charArrP)) {
      res.push(i - lenP + 1);
    }
  }

  return res;
}
```

