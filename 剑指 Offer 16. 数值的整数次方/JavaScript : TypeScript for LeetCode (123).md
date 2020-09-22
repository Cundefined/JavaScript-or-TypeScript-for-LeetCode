# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 16 )  数值的整数次方**](https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/)
      


## 2、解题思路
**方法：快速幂算法**
```javascript
例如：求a的11次
11 = (1011)b = 2的3次 * 1 + 2的2次 * 1 + 2的1次 * 1 + 2的0次 * 1
a的11次 = （a的8次 * 1） * （a的4次 * 0）* （a的2次 * 1）* （a的0次 * 1）
注意：二进制的每一位控制是否需要把a的次方乘进最后的结果中
    所以，关键在于判断每一位是否为1，为1就乘如，不为1就不乘入，只需要把幂的二进制右移一位继续判断
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 边界条件
  if (x === 0) {
    return 0;
  }

  let res = 1.0;

  // 幂为负时，需要倒一下，转换成(1/x)的正n次方
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  //循环移位n的二进制，从最右边依次往左边判断每一位是否为1
  while (n > 0) {
    if ((n & 1) === 1) {
      res = res * x;
    }

    x = x * x;

    n = n >>> 1;
  }

  return res;
};
```

### 2.2、TypeScript Solution

```javascript
function myPow(x: number, n: number): number {
  // 边界条件
  if (x === 0) {
    return 0;
  }

  let res: number = 1.0;

  // 幂为负时，需要倒一下，转换成(1/x)的正n次方
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }

  //循环移位n的二进制，从最右边依次往左边判断每一位是否为1
  while (n > 0) {
    if ((n & 1) === 1) {
      res = res * x;
    }

    x = x * x;

    n = n >>> 1;
  }

  return res;
}
```

