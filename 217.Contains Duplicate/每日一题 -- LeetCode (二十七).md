# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第217题 )  存在重复元素**
       给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。




​	  **示例 1:**

```javascript
输入: [1,2,3,1]
输出: true
```
**示例 2:**
```javascript
输入: [1,2,3,4]
输出: false
```
**示例 3:**
```javascript
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：利用set集合元素唯一性
 1. 创建一个set集合

 2. 遍历数组的元素：
 	2.1、判断set是否有当前元素，有的话就说明重复了，返回true
    2.2、没有的话，就添加进set，不做操作
 4. 全部遍历完还没返回true的话，说明没有重复，返回false

### 2.1、JavaScript Solution

```javascript
/*
解题思路：利用set集合元素唯一性
1、创建一个set集合
2、遍历数组的元素：
    2.1、判断set是否有当前元素，有的话就说明重复了，返回true
    2.2、没有的话，就添加进set，不做操作
3、全部遍历完还没返回true的话，说明没有重复，返回false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // 1、创建一个set集合
  let set = new Set();

  // 2、遍历数组的元素：
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      // 2.1、判断set是否有当前元素，有的话就说明重复了，返回true
      return true;
    } else {
      // 2.2、没有的话，就添加进set，不做操作
      set.add(nums[i]);
    }
  }

  // 3、全部遍历完还没返回true的话，说明没有重复，返回false
  return false;
};
```


### 2.2、TypeScript Solution

```javascript
function containsDuplicate(nums: number[]): boolean {

    let set: Set<number> = new Set();

    for (let i: number = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }

    return false;

};
```

