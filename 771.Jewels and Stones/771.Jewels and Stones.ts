/*
解题思路：方法二、利用字符的ASCII码
A ~ z的ASCII码：65 ~ 122
1、创建长度122-65+1=58的为数组，用于标记宝石
2、遍历S，只要发现宝石，就统计

*/
function numJewelsInStones(J: string, S: string): number {
  const arr: number[] = new Array<number>(58);
  let count: number = 0;

  for (let i: number = 0; i < J.length; i++) {
    arr[J.charCodeAt(i) - 65] = 1;
  }

  for (let j: number = 0; j < S.length; j++) {
    if (arr[S.charCodeAt(j) - 65] === 1) {
      count++;
    }
  }

  return count;
}
