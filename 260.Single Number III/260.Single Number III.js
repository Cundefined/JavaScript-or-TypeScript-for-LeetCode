/*
解题思路：使用“二进制” 【参考 136.Single Number】
注意：异或运算满足交换律和结合律，相同的元素异或得0，0与任何元素异或得其本身
     异或就是二进制的加法，而二进制加法和减法一样a + b = a - b = xorAllItem
     则xorAllItem表示两个出现一次的数的差异，假如找到了a，那 b = xorAllItem + a
1、计算数组中所有数字的二进制异或，这个值代表两个单数a，b之间的差值（a - b = xorAllItem），即标出所有不同的位
2、从所有不同的位中，只取一个位标志就行（取最右边的1）
3、主要思想是将两个不同的单数分成两部分，这样就形成了两个和136.Single Number一样的问题，再分别全部异或就可以分别得出两个单数
4、返回结果数组
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // 1、计算数组中所有数字的二进制异或，这个值代表两个单数a，b之间的差值（a - b = xorAllItem），即标出所有不同的位
  let xorAllItem = 0;
  for (let i = 0; i < nums.length; i++) {
    xorAllItem = xorAllItem ^ nums[i];
  }

  // 2、从所有不同的位中，只取一个位标志就行（取最右边的1）
  let bitFromAB = 1;
  while ((bitFromAB & xorAllItem) === 0) {
    bitFromAB = bitFromAB << 1;
  }

  // 3、主要思想是将两个不同的单数分成两部分，这样就形成了两个和136.Single Number一样的问题，再分别全部异或就可以分别得出两个单数
  let a = 0;
  let b = 0;
  for (const item of nums) {
    if ((item & bitFromAB) === 0) {
      b ^= item;
    } else {
      a ^= item;
    }
  }

  // 4、返回结果数组
  return [a, b];
};
