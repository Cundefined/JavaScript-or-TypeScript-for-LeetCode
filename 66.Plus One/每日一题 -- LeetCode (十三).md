# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第66题 )  加一**
       给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。



​	  **示例 1:**

```javascript
输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```
**示例 2:**
```javascript
输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/plus-one
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 由于低位在右，往左边高位进位，所以遍历数组元素选择从左依次处理：
 	1.1、如果当前元素不为9的话，直接加一，就可以返回结果了
 	1.2、如果当前元素为9的话，那就把当前元素置为0，继续遍历左边一位，发现不为9就执行1.1，达到进位效果
 3. 如果循环结束到这一步的话，说明函数并没有在for循环的1.1返回结果，那说明数组元素都是9，此时的digits数组元素应该已经都被置为0了，那么只需要和1拼接成新数组即可得到结果
 4. 返回结果


### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、由于低位在右，往左边高位进位，所以遍历数组元素选择从左依次处理：
    1.1、如果当前元素不为9的话，直接加一，就可以返回结果了
    1.2、如果当前元素为9的话，那就把当前元素置为0，继续遍历左边一位，发现不为9就执行1.1，达到进位效果
2、如果循环结束到这一步的话，说明函数并没有在for循环的1.1返回结果，那说明数组元素都是9，此时的digits数组元素应该已经都被置为0了
    那么只需要和1拼接成新数组即可得到结果
3、返回结果
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 1、由于低位在右，往左边高位进位，所以遍历数组元素选择从左依次处理：
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      // 1.1、如果当前元素不为9的话，直接加一，就可以返回结果了
      digits[i]++;
      return digits;
    } else {
      // 1.2、如果当前元素为9的话，那就把当前元素置为0，继续遍历左边一位，发现不为9就执行1.1，达到进位效果
      digits[i] = 0;
    }
  }

  // 2、如果循环结束到这一步的话，说明函数并没有在for循环的1.1返回结果，那说明数组元素都是9，此时的digits数组元素应该已经都被置为0了那么只需要和1拼接成新数组即可得到结果
  let result = [1, ...digits];

  // 3、返回结果
  return result;
};
```


### 2.2、TypeScript Solution

```javascript
function plusOne(digits: number[]): number[] {
  for (let i: number = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  let result: number[] = [1, ...digits];
  return result;
}
```

