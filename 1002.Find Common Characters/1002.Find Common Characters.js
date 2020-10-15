/*
解题思路：
1、统计第一个字符串的字符出现次数，之后用于更新为最小的出现次数
2、统计字符串数组中每个字符串的字符出现次数
    2.1、遍历tempCount，把tempCount里统计的字频里的较小的值更新到minCount中
3、遍历minCount，统计结束后，把字频数组代表的字符转成字符，保存到结果数组
4、返回结果数组
*/
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  const res = [];
  if (A.length === 0) {
    return res;
  }
  // 1、统计第一个字符串的字符出现次数，之后用于更新为最小的出现次数
  const minCount = countChar(A[0]);

  //2、统计字符串数组中每个字符串的字符出现次数
  for (let i = 1; i < A.length; i++) {
    let tempCount = countChar(A[i]);

    // 2.1、遍历tempCount，把tempCount里统计的字频里的较小的值更新到minCount中
    for (let j = 0; j < tempCount.length; j++) {
      if (tempCount[j] < minCount[j]) {
        minCount[j] = tempCount[j];
      }
    }
  }

  //3、遍历minCount，统计结束后，把字频数组代表的字符转成字符，保存到结果数组
  for (let i = 0; i < minCount.length; i++) {
    let commonChar = String.fromCharCode(97 + i);

    //如果最小出现次数大于0，就出现几次加几次进结果数组
    while (minCount[i]-- > 0) {
      res.push(commonChar);
    }
  }

  //4、返回结果数组
  return res;
};

//统计字符串中字符出现次数
function countChar(s) {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
  }

  return arr;
}
