# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第137题 )  只出现一次的数字 II**
       给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

**说明：**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？



**示例 1：**
```javascript
输入: [2,2,3,2]
输出: 3
```
**示例 2：**
```javascript
输入: [0,1,0,1,0,1,99]
输出: 99
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
```javascript
解题思路：使用“二进制” 【参考：136.Single Number】
注意：对于相同数字的二进制，其对应位对齐后，该位的1个数应该可以整除数字的个数（本题为3个）
     则剩余数字的二进制每一位 = 该位上其他数字二进制在该位1的个数 % 3
1、创建结果变量
2、for循环遍历依次访问每一位数字的二进制的每一位，判断有没有1，统计1的个数：
  2.1、创建统计1个数的变量
  2.2、for循环对数组的每一个数字都统计每位上1的个数
  2.3、如果把当前数字按位右移i位再与上1，结果为1的话，说明该i位为1，则统计一下
  2.4、统计一个位置之后，加入结果 (注意：异或其实就是二进制的加法！！)
3、统计完成之后，返回结果
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1、创建结果变量
  let res = 0;

  // 2、for循环遍历依次访问每一位数字的二进制的每一位，判断有没有1，统计1的个数：
  for (let i = 0; i < 32; i++) {
    // 2.1、创建统计1个数的变量
    let countOne = 0;

    // 2.2、fo循环对数组的每一个数字都统计每位上1的个数
    for (let j = 0; j < nums.length; j++) {
      // 2.3、如果把当前数字按位右移i位再与上1，结果为1的话，说明该i位为1，则统计一下
      if ((nums[j] >> i) & 1) {
        countOne++;
      }
    }
    // 2.4、统计一个位置之后，加入结果 (注意：异或其实就是二进制的加法！！)
    res = res ^ (countOne % 3 << i);
  }

  // 3、统计完成之后，返回结果
  return res;
};
```

### 2.2、TypeScript Solution

```javascript
function singleNumber(nums: number[]): number {
  let res: number = 0;

  for (let i: number = 0; i < 32; i++) {

    let countOne: number = 0;

    for (let j: number = 0; j < nums.length; j++) {
      if ((nums[j] >> i) & 1) {
        countOne++;
      }
    }

    res = res ^ (countOne % 3 << i);
  }

  return res;
};
```

