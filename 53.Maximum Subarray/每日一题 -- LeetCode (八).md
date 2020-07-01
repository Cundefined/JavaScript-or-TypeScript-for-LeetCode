# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第53题 )  最大子序和**
       给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
       
​	  **示例:**

```javascript
输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：动态规划
 1. 创建一个空数组，用来存储子数组
 2. 创建一个保存最大值的变量
 3. 预先存入第一个元素
 4. 遍历输入数组：

      4.1、对当前要加入子数组的元素进行判断

     4.2、是直接加入nums[i]，还是以nums[i]新开一个数组

    4.3、比较子数组元素之和与nums[i]，前者大就直接加入nums[i],后者大就		以nums[i]新开数组
    4.4、比较完成后，更新最大子序列和
 5. 返回结果

### 2.1、JavaScript Solution

```javascript
/**
 * 解题思路：动态规划
 * 1、创建一个空数组，用来存储子数组
 * 2、创建一个保存最大值的变量
 * 3、预先存入第一个元素
 * 4、遍历输入数组：
 *      4.1、对当前要加入子数组的元素进行判断
 *      4.2、是直接加入nums[i]，还是以nums[i]新开一个数组
 *      4.3、比较子数组元素之和与nums[i]，前者大就直接加入nums[i],后者大就以nums[i]新开数组
 *      4.4、比较完成后，更新最大子序列和
 * 5、返回结果
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 1、创建一个空数组，用来存储子数组
  let subArray = [];
  // 2、创建一个保存最大值的变量
  let max = nums[0];
  // 3、预先存入第一个元素
  subArray[0] = nums[0];

  // 4、遍历输入数组：
  for (let i = 1; i < nums.length; i++) {
    // 4.1、对当前要加入子数组的元素进行判断
    subArray[i] = Math.max(nums[i] + subArray[i - 1], nums[i]);
    // 4.4、比较完成后，更新最大子序列和
    max = Math.max(max, subArray[i]);
  }

  // 5、返回结果
  return max;
};

```



### 2.2、TypeScript Solution

```javascript
function maxSubArray(nums: number[]): number {

    if (nums.length === 0) {
        return 0;
    }

    let subArray: number[] = [];

    let max: number = nums[0];

    subArray[0] = nums[0];

    for (let i: number = 1; i < nums.length; i++) {
        subArray[i] = Math.max(nums[i] + subArray[i - 1], nums[i]);
        max = Math.max(max, subArray[i]);
    }

    return max;
};
```

