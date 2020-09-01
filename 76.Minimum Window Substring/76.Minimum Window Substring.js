/*
解题思路：滑动窗口
基本思路：
1、窗口扩张 right++，当发现窗口框柱目标时，停止扩张，开始收缩
2、窗口收缩 left++，当发现窗口丢失目标时，停止收缩，开始扩张
3、不断循环上面两步，记录并更新最小子串的长度和起始索引
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length === 0 || s.length < t.length) {
    return "";
  }
  // 创建变量，记录并更新最小子串的长度和起始索引
  let minLength = Infinity;
  let startIndex;

  // 创建map字典，记录购物清单，t的每个字符需要几个
  // key为字符，value为数量
  const map = new Map();
  // 记录当前还没在s中找到的字符（物品）种类数
  let NumOfMissCharType = 0;

  // 初始化物品清单
  for (let i = 0; i < t.length; i++) {
    if (!map.has(t[i])) {
      map.set(t[i], 1);
      NumOfMissCharType++;
    } else {
      map.set(t[i], map.get(t[i]) + 1);
    }
  }

  let left = 0;
  let right = 0;

  //窗口扩张 right++
  for (; right < s.length; right++) {
    let rightChar = s[right];
    if (map.has(rightChar)) {
      // 找到一个目标字符，清单中该物品数量要减1
      map.set(rightChar, map.get(rightChar) - 1);
    }

    // 如果当前目标字符全被找到了，说明清单里该物品数量应该已经清零，此时没找到的种类要减1
    if (map.get(rightChar) === 0) {
      NumOfMissCharType--;
    }

    // 当发现窗口框柱目标时，停止扩张，开始收缩
    while (NumOfMissCharType === 0) {
      // 缺失种类为0，在开始收缩之前，应该先记录并更新最小子串的长度和起始索引
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        startIndex = left;
      }

      // 窗口收缩 left++
      let leftChar = s[left];
      if (map.has(leftChar)) {
        map.set(leftChar, map.get(leftChar) + 1);
      }

      if (map.get(leftChar) > 0) {
        NumOfMissCharType++;
      }

      left++;
    }
  }

  return s.substring(startIndex, startIndex + minLength);
};
