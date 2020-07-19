# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第238题 )  除自身以外数组的乘积**
给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。


  **示例:**

```javascript
输入: [1,2,3,4]
输出: [24,12,8,6]
```
**提示：**题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

**说明**: 请**不要使用除法**，且在 O(n) 时间复杂度内完成此题。

**进阶：**
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组**不被视为**额外空间。）

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/product-of-array-except-self
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 创建一个和nums等长的数组，存储当前元素左右两侧数字的乘积，初始化为全1
 

 2. 创建左侧乘积变量，动态记录当前元素左侧的所有元素乘积
 3. for循环正向遍历数组：
 	3.1、更新result数组元素
    3.2、更新product，把当前元素也乘进去，作为下个元素的左侧元素乘积

 4. 创建右侧乘积变量，动态记录当前元素右侧的所有元素乘积
 5. for循环反向遍历数组：
 	5.1、更新result数组元素
    5.2、更新product，把当前元素也乘进去，作为下个元素的右侧元素乘积

 6. 返回结果数组

### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、创建一个和nums等长的数组，存储当前元素左右两侧数字的乘积，初始化为全1
2、创建左侧乘积变量，动态记录当前元素左侧的所有元素乘积
3、for循环正向遍历数组：
    3.1、更新result数组元素
    3.2、更新product，把当前元素也乘进去，作为下个元素的左侧元素乘积
4、创建右侧乘积变量，动态记录当前元素右侧的所有元素乘积
5、for循环反向遍历数组：
    5.1、更新result数组元素
    5.2、更新product，把当前元素也乘进去，作为下个元素的右侧元素乘积
6、返回结果数组
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 1、创建一个和nums等长的数组，存储当前元素左右两侧数字的乘积，初始化为全1
  let result = new Array(nums.length).fill(1);

  // 2、创建左侧乘积变量，动态记录当前元素左侧的所有元素乘积
  let leftProduct = 1;

  // 3、for循环正向遍历数组：
  for (let i = 0; i < nums.length; i++) {
    result[i] = result[i] * leftProduct;
    leftProduct = leftProduct * nums[i];
  }

  // 4、创建右侧乘积变量，动态记录当前元素右侧的所有元素乘积
  let rightProduct = 1;

  // 5、for循环反向遍历数组：
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    rightProduct = rightProduct * nums[i];
  }

  // 6、返回结果数组
  return result;
};
```


### 2.2、TypeScript Solution

```javascript
function productExceptSelf(nums: number[]): number[] {
  let result: number[] = new Array<number>(nums.length).fill(1);

  let leftProduct: number = 1;

  for (let i: number = 0; i < nums.length; i++) {
    result[i] = result[i] * leftProduct;
    leftProduct = leftProduct * nums[i];
  }

  let rightProduct = 1;
  for (let i: number = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    rightProduct = rightProduct * nums[i];
  }

  return result;
}
```

