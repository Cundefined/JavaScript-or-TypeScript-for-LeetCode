/*
解题思路：滑动窗口
1、创建map字典，键为数组当前元素，值为该元素索引
注意：map最多只允许有两项键值对，分别对应两个篮子，每个篮子只允许放入一种水果
2、创建两个指针变量i、fruitOnePostion，分别用于变量给定数组和更新放入篮子的第一种水果的起始位置
3、创建记录水果最大数量的变量fruitMaxCount，题目要求至少为1
4、for循环遍历数组：
    4.1、把当前水果加入map中
    4.2、判断map中是否超过两项键值对（最多两个篮子）：
        4.2.1、若是，则计算应该删除哪一项，应该删除最前面的那项，即值最小的，先创建一个最小索引值的变量，初始化为数组的长度
        4.2.2、for of循环遍历map，各项的值和minIndex比较，取最小的去更新minIndex
        4.2.3、删除map中键为tree[minIndex]的项
        4.2.4、同时需要把fruitOnePostion移到minIndex + 1位置，用于后续计算水果数量
    4.3、计算更新fruitMaxCount
5、返回fruitMaxCount
*/
/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {

  // 1、创建map字典，键为数组当前元素，值为该元素索引
  const map = new Map();

  // 2、创建两个指针变量i、fruitOnePostion，分别用于变量给定数组和更新放入篮子的第一种水果的起始位置
  let i = 0;
  let fruitOnePostion = 0;

  // 3、创建记录水果最大数量的变量fruitMaxCount，题目要求至少为1
  let fruitMaxCount = 1;

  // 4、for循环遍历数组：
  for (i; i < tree.length; i++) {
    // 4.1、把当前水果加入map中
    map.set(tree[i], i);

    // 4.2、判断map中是否超过两项键值对（最多两个篮子）：
    if (map.size > 2) {
      // 4.2.1、若是，则计算应该删除哪一项，应该删除最前面的那项，即值最小的，先创建一个最小索引值的变量，初始化为数组的长度
      let minIndex = tree.length - 1;

      // 4.2.2、循环遍历map，各项的值和minIndex比较，取最小的去更新minIndex
      for (let [fruit, index] of map) {
        if (index < minIndex) {
          minIndex = index;
        }
      }

      // 4.2.3、删除map中键为tree[minIndex]的项
      map.delete(tree[minIndex]);

      // 4.2.4、同时需要把fruitOnePostion移到minIndex + 1位置，用于后续计算水果数量
      fruitOnePostion = minIndex + 1;
    }
    // 4.3、计算更新fruitMaxCount
    fruitMaxCount = Math.max(fruitMaxCount, i - fruitOnePostion + 1);
  }

  // 5、，并返回
  return fruitMaxCount;
};

