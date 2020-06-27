# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第15题 )  三数之和**
       给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

​      **注意：**答案中不可以包含重复的三元组。

​	  **示例:**

```javascript
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 给输入的数组排序（从小到大）,初始化result空数组

 2. 去除重复的结果
 	2.1、若i为0 或者 “本次循环的i指向的加数”不等于“上次循环的i指向的加数”才开始本次循环

 3. 开始本次循环

      3.1、初始化3个指针变量 

      ​	3.1.1、第一个变量i用于指向第一个加数（小）i=0

      ​	3.1.2、第二个变量j用于指向第二个加数（中）j=i+1

      ​	3.1.3、第三个变量k用于指向第三个加数（大）k=nums.length-1

      3.2、当j<k时，需要判断三个加数相加是否为0:

      ​	3.2.1、若等于0，则返回这三个加数，j++,k--，但此时仍需要去除重复结果

      ​	3.2.2、若小于0，则j++，使得结果增大，去接近0

      ​	3.2.3、若大于0，则k--，使得结果减小，去接近0

 4. 返回result结果


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 解题思路：
 * 1、给输入的数组排序（从小到大）,初始化result空数组
 *      
 * 2、去除重复的结果
 *      2.1、若i为0 或者 “本次循环的i指向的加数”不等于“上次循环的i指向的加数”才开始本次循环
 * 3、开始本次循环
 *      3.1、初始化3个指针变量 
 *          3.1.1、第一个变量i用于指向第一个加数（小）i=0
 *          3.1.2、第二个变量j用于指向第二个加数（中）j=i+1
 *          3.1.3、第三个变量k用于指向第三个加数（大）k=nums.length-1
 *      3.2、当j<k时，需要判断三个加数相加是否为0
 *          3.2.1、若等于0，则返回这三个加数，j++,k--，但此时仍需要去除重复结果
 *          3.2.2、若小于0，则j++，使得结果增大，去接近0
 *          3.2.3、若大于0，则k--，使得结果减小，去接近0
 * 4、返回result结果     
 */
var threeSum = function(nums) {
    //  1、给输入的数组排序（从小到大），初始化result空数组
    nums.sort((a, b) => a - b);
    let result = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        // 2、去除重复的结果
        // 2.1、若i为0 或者 “本次循环的i指向的加数”不等于“上次循环的i指向的加数”才开始本次循环
        if (i === 0 || nums[i] !== nums[i - 1]) {
            // 3、开始本次循环
            //   3.1、初始化3个指针变量 
            let j = i + 1, k = nums.length - 1;
            //   3.2、当j<k时，需要判断三个加数相加是否为0
            while (j < k) {
                // 3.2.1、若等于0，则返回这三个加数，j++,k--，但此时仍需要去除重复结果
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                    while (j < k && nums[k] === nums[k + 1]) {
                        k--;
                    }
                } else if (nums[i] + nums[j] + nums[k] < 0){
                    // 3.2.2、若小于0，则j++，使得结果增大，去接近0
                    j++;
                } else {
                    // 3.2.3、若大于0，则k--，使得结果减小，去接近0
                    k--;
                }
            }
        }
    }

    // 4、返回结果  
    return result;
};
```


### 2.2、TypeScript Solution

```typescript
function threeSum(nums: number[]): number[][] {
    nums.sort((a: number, b: number) => a - b);
    const result: number[][] = [];

    for (let i: number = 0; i < nums.length - 2; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let j: number = i + 1, k: number = nums.length - 1;
            while (j < k) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;

                    while (j < k && nums[j] === nums[j -1]) {
                        j++;
                    }

                    while (j < k && nums[k] === nums[k +1]) {
                        k--;
                    }
                } else if (nums[i] + nums[j] + nums[k] < 0){
                    j++;
                } else {
                    k--;
                }
            } 
        }
    }
    return result;
};
```
