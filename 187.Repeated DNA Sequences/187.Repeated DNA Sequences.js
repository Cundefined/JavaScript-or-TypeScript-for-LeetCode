/*
解题思路：滑动窗口（固定尺寸，滑动，就是窗户啊）
1、创建map字典，键为窗口遍历到的字符串，值为该字符串出现的次数
2、创建存储结果的数组
3、遍历输入的字符串：
    3.1、截取窗口覆盖的字符串
    3.2、如果map没有当前字符串，就加进map，键为当前字符串，值为1
    3.3、如果map有当前字符串且值为1的话，那此次添加就会超过1次，次数加1，然后push进结果数组中
4、遍历完之后，返回结果数组  
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // 1、创建map字典，键为窗口遍历到的字符串，值为该字符串出现的次数
  let map = new Map();

  // 2、创建存储结果的数组
  let result = [];

  // 3、遍历输入的字符串：
  for (let i = 0; i < s.length - 9; i++) {
    // 3.1、截取窗口覆盖的字符串
    let sequences = s.substring(i, i + 10);

    // 3.2、如果map没有当前字符串，就加进map，键为当前字符串，值为1
    if (!map.has(sequences)) {
      map.set(sequences, 1);
    } else if (map.get(sequences) === 1) {
      // 3.3、如果map有当前字符串且值为1的话，那此次添加就会超过1次，次数加1，然后push进结果数组中
      map.set(sequences, 2);
      result.push(sequences);
    }
  }

  // 4、遍历完之后，返回结果数组
  return result;
};
