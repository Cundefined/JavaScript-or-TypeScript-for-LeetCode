# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第349题 )  两个数组的交集**
     
给定两个数组，编写一个函数来计算它们的交集。


​	  **示例 1:**

```javascript
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
```
**示例 2:**
```javascript
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
```
**说明：**

 - 输出结果中的每个元素一定是唯一的。 
 - 我们可以不考虑输出结果的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：利用集合元素唯一性
 1. 边界条件预判
 

 2. 创建一个set集合，存储两个数组的交集元素
 	
 3. for循环遍历nums1数组：
 	3.1、如果nums2数组包含当前元素，则说明是交集元素，将其添加进Set中
 5. 遍历结束后，将set集合转成数组返回

### 2.1、JavaScript Solution

```javascript
/*
解题思路：利用集合元素唯一性
1、边界条件预判
2、创建一个set集合，存储两个数组的交集元素
3、for循环遍历nums1数组：
    3.1、如果nums2数组包含当前元素，则说明是交集元素，将其添加进Set中
4、遍历结束后，将set集合转成数组返回
*/

/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var intersection = function (nums1, nums2) {
  // 1、边界条件预判
  if (nums1.length === 0 && nums2.length === 0) {
    return [];
  }
  // 2、创建一个set集合，存储两个数组的交集元素
  const resultSet = new Set();
  //优化：把nums2转成Set集合
  const nums2Set = new Set(nums2);

  // 3、for循环遍历nums1数组：
  for (let i = 0; i < nums1.length; i++) {
    // 3.1、如果nums2数组包含当前元素，则说明是交集元素，将其添加进Set中
    // 优化：nums2.includes()其实就是for循环，时间复杂度为O(n)，
    // 若把nums2数组转换成set或者map，利用has()方法，时间复杂度为O(1)
    // if (nums2.includes(nums1[i])) {
    //   resultSet.add(nums1[i]);
    // }
    if (nums2Set.has(nums1[i])) {
      resultSet.add(nums1[i]);
    }
  }

  // 4、遍历结束后，将set集合转成数组返回
  return Array.from(resultSet);
};
```


### 2.2、TypeScript Solution

```javascript
function intersection(nums1: number[], nums2: number[]): number[] {
    if (nums1.length === 0 && nums2.length === 0) {
        return [];
    }

    const resultSet: Set<number> = new Set();

    const nums2Set: Set<number> = new Set(nums2);

    for (let i: number = 0; i < nums1.length; i++) {
        if (nums2Set.has(nums1[i])) {
            resultSet.add(nums1[i])
        }
    }

    return Array.from(resultSet);
};
```

