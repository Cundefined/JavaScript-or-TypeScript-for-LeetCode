# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1o7411W72Jfrom=search&seid=10770981287507081120***

## 1、题目要求
**( LeetCode-第7题 )  整数反转**
       
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。


​	  **示例 1:**

```javascript
输入: 123
输出: 321
```
**示例 2:**
```javascript
输入: -123
输出: -321
```
**示例 3:**
```javascript
输入: 120
输出: 21
```
**注意:**

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


## 2、解题思路
**方法一：整数 -> 数组**
```javascript
由于整数不可变、不可遍历，需要转换成可变的、可遍历的数组来处理
整数 -> toString() -> 字符串 -> split() -> 数组
数组 -> reverse() -> 反转 -> join() -> 字符串 -> parseInt() -> 整数 
1、创建变量，记录Int范围，用于判断反转后是否溢出
2、创建变量，记录输入整数的符号
3、记录完符号后，就去绝对值，当作正整数来处理
4、整数 -> toString() -> 字符串 -> split() -> 数组
5、数组 -> reverse() -> 反转 -> join() -> 字符串 -> parseInt() -> 整数 
6、把符号还给反转后的整数，再判断是否溢出
7、返回结果
```
**方法二：求余法**
```javascript
由于整数除以10，得到余数总是等于该数的个位数字，这样可以从右到左依次取出整数的各个位置的数，
1、创建变量，记录Int范围，用于判断反转后是否溢出
2、创建变量，记录输入整数的符号
3、记录完符号后，就去绝对值，当作正整数来处理
4、创建变量，记录结果，初始化为0
5、创建变量，保存余数
6、while循环，当x等于0时，说明已经分离出最高位了，停止循环，否则：
  6.1、整数对10取余数，得到最低位
  6.2、整数减去余数再除以10，得到上面取余时的商（也就是剩下的高位数的整数，被除数=商*除数 + 余数）
  6.3、反转拼接整数
7、把符号还给反转后的整数，再判断是否溢出
8、返回结果
```

### 2.1、JavaScript Solution
**方法一：整数 -> 数组**
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 1、创建变量，记录Int范围，用于判断反转后是否溢出
  let min = Math.pow(-2, 31);
  let max = Math.pow(2, 31) - 1;

  // 2、创建变量，记录输入整数的符号
  //   Math.sign() 函数返回一个数字的符号, 指示数字是正数，负数还是零
  //   此函数共有5种返回值, 分别是 1, -1, 0, -0, NaN. 代表的各是正数, 负数, 正零, 负零, NaN。
  let sign = Math.sign(x);

  // 3、记录完符号后，就去绝对值，当作正整数来处理
  x = Math.abs(x);

  // 4、整数 -> toString() -> 字符串 -> split() -> 数组
  let intArray = x.toString().split("");

  // 5、数组 -> reverse() -> 反转 -> join() -> 字符串 -> parseInt() -> 整数
  let result = parseInt(intArray.reverse().join(""));

  // 6、把符号还给反转后的整数，再判断是否溢出
  result = sign * result;
  if (result < min || result > max) {
    return 0;
  }

  // 7、返回结果
  return result;
};
```
**方法二：求余法**
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 1、创建变量，记录Int范围，用于判断反转后是否溢出
  let min = Math.pow(-2, 31);
  let max = Math.pow(2, 31) - 1;

  // 2、创建变量，记录输入整数的符号
  //   Math.sign() 函数返回一个数字的符号, 指示数字是正数，负数还是零
  //   此函数共有5种返回值, 分别是 1, -1, 0, -0, NaN. 代表的各是正数, 负数, 正零, 负零, NaN。
  let sign = Math.sign(x);

  // 3、记录完符号后，就去绝对值，当作正整数来处理
  x = Math.abs(x);

  // 4、创建变量，记录结果，初始化为0
  let result = 0;

  // 5、创建变量，保存余数
  let remainder;

  // 6、while循环，当x等于0时，说明已经分离出最高位了，停止循环，否则：
  while (x !== 0) {
    // 6.1、整数对10取余数，得到最低位
    remainder = x % 10;

    // 6.2、整数减去余数再除以10，得到上面取余时的商（也就是剩下的高位数的整数，被除数=商*除数 + 余数）
    x = (x - remainder) / 10;

    // 6.3、反转拼接整数
    result = result * 10 + remainder;
  }

  // 7、把符号还给反转后的整数，再判断是否溢出
  result = sign * result;
  if (result < min || result > max) {
    return 0;
  }

  // 8、返回结果
  return result;
};

```

### 2.2、TypeScript Solution
**方法一：整数 -> 数组**
```javascript
function reverse(x: number): number {
  let min: number = Math.pow(-2, 31);
  let max: number = Math.pow(2, 31) - 1;

  let sign: number = Math.sign(x);

  x = Math.abs(x);

  let stringArray: Array<string> = x.toString().split("");

  let result: number = parseInt(stringArray.reverse().join(""));

  result = sign * result;
  if (result < min || result > max) {
    return 0;
  }

  return result;
}

```
**方法二：求余法**
```javascript
function reverse(x: number): number {
  let min: number = Math.pow(-2, 31);
  let max: number = Math.pow(2, 31) - 1;

  let sign: number = Math.sign(x);

  x = Math.abs(x);

  let result: number = 0;

  let remainder: number;

  while (x !== 0) {
    remainder = x % 10;

    x = (x - remainder) / 10;

    result = result * 10 + remainder;
  }

  result = sign * result;
  if (result < min || result > max) {
    return 0;
  }

  return result;
}

```

