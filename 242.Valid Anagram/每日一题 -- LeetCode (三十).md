# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第242题 )  有效的字母异位词**
       给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。



​	  **示例 1:**

```javascript
输入: s = "anagram", t = "nagaram"
输出: true
```
**示例 2:**
```javascript
输入: s = "rat", t = "car"
输出: false
```
**说明:**
你可以假设字符串只包含小写字母。

**进阶:**
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-anagram
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：输入的两个字符串的所有字母出现次数一样就是anagram
 1. 边界条件预判：
 	1.1、输入字符串都为空的话，返回false
    1.2、输入字符串长度不相等的话,返回false
 

 2. 创建map字典，键为字符元素，值为该元素出现次数
 3. for循环遍历s字符串：
 	3.1、如果map有当前字符s[i]，则值加1
    3.2、若没有，添加该字符，值为1
    3.3、如果map有字符t[i]，则值减1
    3.4、若没有，添加该字符，值为-1
 4. for of 循环遍历map,若出现非0的值，两个字符串字母不一样，返回false
 5. 遍历完map还没return的话，说明字母都一样，返回true

### 2.1、JavaScript Solution

```javascript
/*
解题思路：输入的两个字符串的所有字母出现次数一样就是anagram
1、边界条件预判：
    1.1、输入字符串都为空的话，返回false
    1.2、输入字符串长度不相等的话,返回false
2、创建map字典，键为字符元素，值为该元素出现次数
3、for循环遍历s字符串：
    3.1、如果map有当前字符s[i]，则值加1
    3.2、若没有，添加该字符，值为1
    3.3、如果map有字符t[i]，则值减1
    3.4、若没有，添加该字符，值为-1
4、for of 循环遍历map,若出现非0的值，两个字符串字母不一样，返回false
5、遍历完map还没return的话，说明字母都一样，返回true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 1、边界条件预判：
  //   1.1、输入字符串都为空的话，返回false

  if (s.length === 0 && t.length === 0) {
    return true;
  }
  //   1.2、输入字符串长度不相等的话,返回false
  if (s.length !== t.length) {
    return false;
  }

  // 2、创建map字典，键为字符元素，值为该元素出现次数
  const map = new Map();

  // 3、for循环遍历s字符串：
  for (let i = 0; i < s.length; i++) {
    // 3.1、如果map有当前字符s[i]，则值加1
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      // 3.2、若没有，添加该字符，值为1
      map.set(s[i], 1);
    }

    // 3.3、如果map有字符t[i]，则值减1
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) - 1);
    } else {
      // 3.4、若没有，添加该字符，值为-1
      map.set(t[i], -1);
    }
  }

  // 4、for in 循环遍历map,若出现非0的值，两个字符串字母不一样，返回false
  for (const keyValue of map) {
    if (keyValue[1] !== 0) {
      return false;
    }
  }
  // 5、遍历完map还没return的话，说明字母都一样，返回true
  return true;
};
```


### 2.2、TypeScript Solution

```javascript
function isAnagram(s: string, t: string): boolean {
  if (s.length === 0 && t.length === 0) {
    return false;
  }

  if (s.length !== t.length) {
    return false;
  }

  const map: Map<string, number | undefined> = new Map();

  for (let i: number = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) !== undefined) {
      console.log(map.get(s[i]));

      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }

    if (map.has(t[i]) && map.size !== 0) {
      map.set(t[i], map.get(t[i]) + 1);
    } else {
      map.set(t[i], -1);
    }
  }

  for (let keyValue of map) {
    if (keyValue[1] !== 0) {
      return false;
    }
  }

  return true;
}
```

