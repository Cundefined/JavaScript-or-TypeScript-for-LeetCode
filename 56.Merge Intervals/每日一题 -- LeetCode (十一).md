# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第56题 )  合并区间**
       给出一个区间的集合，请合并所有重叠的区间。

​	  **示例 1:**

```javascript
输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```
**示例 2:**
```javascript
输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 预判输入数组里面的元素是否<=1，是的话，直接返回
 

 1. 将数组中的区间按照起始位置排序，如果起始位置相同的话，就按结束位置排序
 2. 用mergingInterval数组记录当前合并的最大区间
 3. 创建保存结果的数组
 4. 遍历数组中的每一个区间：
 5.1、如果当前区间的起始位置<=mergingInterval的终点位置,则可以合并，并更新mergingInterval的终点
5.2、如果当前区间的起始位置>=mergingInterval的终点位置，则无法合并，并把mergingInterval数组push进结果数组中，把mergingInterval数组更新为当前遍历到的当前数组
 5. 返回结果数组

### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、预判输入数组里面的元素是否<=1，是的话，直接返回
2、将数组中的区间按照起始位置排序，如果起始位置相同的话，就按结束位置排序
3、用mergingInterval数组记录当前合并的最大区间
4、创建保存结果的数组
5、遍历数组中的每一个区间：
    5.1、如果当前区间的起始位置<=mergingInterval的终点位置,则可以合并，并更新mergingInterval的终点
    5.2、如果当前区间的起始位置>=mergingInterval的终点位置，则无法合并，并把mergingInterval数组push进结果数组中，把mergingInterval数组更新为当前遍历到的当前数组
6、返回结果数组

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 1、预判输入数组里面的元素是否<=1，是的话，直接返回
  if (intervals.length <= 1) {
    return intervals;
  }

  // 2、将数组中的区间按照起始位置排序，如果起始位置相同的话，就按结束位置排序
  intervals.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });

  // 3、用mergingInterval数组记录当前合并的最大区间
  let mergingInterval = intervals[0];
  // 4、创建保存结果的数组
  let result = [];

  // 5、遍历数组中的每一个区间：
  for (let i = 1; i < intervals.length; i++) {
    // 5.1、如果当前区间的起始位置<=mergingInterval的终点位置,则可以合并，并更新mergingInterval的终点
    if (intervals[i][0] <= mergingInterval[1]) {
      mergingInterval[1] = Math.max(mergingInterval[1], intervals[i][1]);
    } else {
      // 5.2、如果当前区间的起始位置>=mergingInterval的终点位置，则无法合并，并把mergingInterval数组push进结果数组中，把mergingInterval数组更新为当前遍历到的当前数组
      result.push(mergingInterval);
      mergingInterval = intervals[i];
    }
  }

  // 6、返回结果数组
  result.push(mergingInterval);


  return result;
};
```


### 2.2、TypeScript Solution

```javascript
function merge(intervals: number[][]): number[][] {

    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a: number[], b: number[]): number => {
        return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    })

    let mergingInterval: number[] = intervals[0];

    let result: number[][] = [];

    for (let i: number = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= mergingInterval[1]) {
            mergingInterval[1] = Math.max(mergingInterval[1], intervals[i][1]);

        } else {
            result.push(mergingInterval);
            mergingInterval = intervals[i];
        }
    }

    result.push(mergingInterval);
    return result;
};
```

