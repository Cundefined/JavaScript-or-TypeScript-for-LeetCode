# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第219题 )  存在重复元素 II**
       给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。




​	  **示例 1:**

```javascript
输入: nums = [1,2,3,1], k = 3
输出: true
```
​	  **示例 2:**

```javascript
输入: nums = [1,0,1,1], k = 1
输出: true
```
 **示例 3:**
```javascript
输入: nums = [1,2,3,1,2,3], k = 2
输出: false
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
解题思路：利用map字典记录元素出现次数
 1. 边界条件预判，数组为空或者只有一个元素的话，肯定没有重复元素了
 2. 创建一个map字典，键为数组元素，值为该元素的索引
 3. for循环遍历数组元素：
 	3.1、判断map里有没有当前元素，没有的话，就加进去
    3.2、有的话，就判断当前元素的索引 - 之前存在map中的值 是否小于等于k,是的话，就返回true

 
 

 1. 循环结束，还没return的话，说明没有满足要求的重复元素，返回false



### 2.1、JavaScript Solution

```javascript
/*
解题思路：利用map字典记录元素出现次数
1、边界条件预判，数组为空或者只有一个元素的话，肯定没有重复元素了
2、创建一个map字典，键为数组元素，值为该元素的索引
3、for循环遍历数组元素：
    3.1、判断map里有没有当前元素，没有的话，就加进去
    3.2、有的话，就判断当前元素的索引 - 之前存在map中的值 是否小于等于k,是的话，就返回true
4、循环结束，还没return的话，说明没有满足要求的重复元素，返回false

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // 1、边界条件预判，数组为空或者只有一个元素的话，肯定没有重复元素了
  if (nums.length <= 1) {
    return false;
  }

  // 2、创建一个map字典，键为数组元素，值为该元素的索引
  let map = new Map();

  // 3、for循环遍历数组元素：
  for (let i = 0; i < nums.length; i++) {
    // 3.1、判断map里有没有当前元素，没有的话，就加进去
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else if (i - map.get(nums[i]) <= k) {
      // 3.2、有的话，就判断当前元素的索引 - 之前存在map中的值 是否小于等于k,是的话，就返回true
      return true;
    } else {
      map.set(nums[i], i);
    }
  }

  // 4、循环结束，还没return的话，说明没有满足要求的重复元素，返回false
  return false;
};
```


### 2.2、TypeScript Solution

```javascript
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length <= 1) {
    return false;
  }

  let map: Map<number, number | undefined> = new Map();

  for (let i: number = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && map.get(nums[i]) !== undefined) {
      if (i - map.get(nums[i]) <= k) {
        return true;
      }
    } else {
      map.set(nums[i], i);
    }
  }

  return false;
}
```

