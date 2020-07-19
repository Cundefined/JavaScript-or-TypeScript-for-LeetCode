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
