/*
解题思路：方法一、哈希表
*/
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const map = new Map();
  let count = 0;
  //记录宝石
  for (let i = 0; i < J.length; i++) {
    map.set(J[i], 1);
  }

  //找出石头中的宝石并统计
  for (let j = 0; j < S.length; j++) {
    if (map.has(S[j])) {
      count++;
    }
  }

  return count;
};
