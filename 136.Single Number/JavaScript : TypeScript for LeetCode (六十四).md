# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第136题 )  只出现一次的数字**
       给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

**说明：**

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？


 **示例 1:**

```java
输入: [2,2,1]
输出: 1
```
 **示例 2:**
```javascript
输入: [4,1,2,1,2]
输出: 4
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
**方法一：使用map字典**
```javascript
1、创建map字典，键为数组元素，值为出现次数
2、for循环将数组元素加入map
3、找出map中值为1的键
时间复杂度--O(n)  空间复杂度--O(n)
```
**方法二：使用“二进制” -- 按位异或运算**
```javascript
注意：异或运算满足交换律和结合律，相同的元素异或得0，0与任何元素异或得其本身
1、记录一下数组第一个元素
2、for循环遍历数组，用第一个元素依次往后，与所有元素进行异或运算
3、返回剩下的那个元素，就是只出现一次的那个元素
时间复杂度--O(n)  空间复杂度--O(1)
```

### 2.1、JavaScript Solution
**方法一：使用map字典**
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1、创建map字典，键为数组元素，值为出现次数
  let map = new Map();

  // 2、for循环将数组元素加入map
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], 2);
    } else {
      map.set(nums[i], 1);
    }
  }

  // 3、找出map中值为1的键
  for (const keyValue of map) {
    if (keyValue[1] === 1) {
      return keyValue[0];
    }
  }
};

```
**方法二：使用“二进制” -- 按位异或运算**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1、记录一下数组第一个元素
  let xorRes = nums[0];

  // 2、for循环遍历数组，用第一个元素依次往后，与所有元素进行异或运算
  for (let i = 1; i < nums.length; i++) {
    xorRes = xorRes ^ nums[i];
  }

  // 3、返回剩下的那个元素，就是只出现一次的那个元素
  return xorRes;
};
```

### 2.2、TypeScript Solution
**方法一：使用map字典**

```javascript
function singleNumber(nums: number[]): number {
  let map: Map<number, number> = new Map();

  for (let i: number = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], 2);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (const keyValue of map) {
    if (keyValue[1] === 1) {
      return keyValue[0];
    }
  }
}

```

**方法二：使用“二进制” -- 按位异或运算**
```javascript
function singleNumber(nums: number[]): number {
  for (let i: number = 1; i < nums.length; i++) {
    nums[0] = nums[0] ^ nums[i];
  }

  return nums[0];
}
```

