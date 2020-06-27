@[TOC](每日一题 -- LeetCode（一）)

# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第1题 )  两数之和**
       给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
	  **示例:**
	  

```javascript
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```
题目来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 定义一个空字典，key为数组元素值,value为该元素在数组中对应索引值
 2. 遍历输入的数组
 	2.1 用目标值减去数组元素
 	2.2 判断字典中是否存在该差值，若不存在就添加进去 
 	2.3 若存在该差值，说明数组中有两数之和为目标值，则返回两数的索引

 3. 若最后遍历结束，都还没在字典中找到该差值，就返回空数组


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 1、定义一个空字典，key为数组元素值,value为该元素在数组中对应索引值
    const map = new Map();
    // 2、遍历输入的数组
    for (let i = 0; i < nums.length; i++) {
        // 3、用目标值减去数组元素
        const subtractValue = target - nums[i];
        // 4、判断字典中是否存在该差值，若不存在就添加进去
        if (!map.has(subtractValue)) {
            map.set(nums[i],i);
        } else{
            // 若存在该差值，说明数组中有两数之和为目标值
            // 则返回两数的索引
            return [map.get(subtractValue), i];
        }
    }
    // 5、若遍历结束都还没在字典中找到该差值，就返回空数组
    return [];
};
```


### 2.2、TypeScript Solution

```javascript
function twoSum(nums: number[], target: number): number[] {
    // 1、定义一个空字典，key为数组元素值,value为该元素在数组中对应索引值
    const map = new Map();
     // 2、遍历输入的数组
     for (let i = 0; i<nums.length; i++) {
         // 3、用目标值减去数组元素
         const subtractValue: number = target - nums[i];
         // 4、判断字典中是否存在该差值，若不存在就添加进去
         if (!map.has(subtractValue)) {
             map.set(nums[i],i);
         } else {
            // 若存在该差值，说明数组中有两数之和为目标值
            // 则返回两数的索引
            return [map.get(subtractValue),i];
         }
     }
     // 5、若遍历结束都还没在字典中找到该差值，就返回空数组
     return [];
};
```
