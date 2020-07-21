# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第836题 )  矩形重叠**
      
矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。

如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

给出两个矩形，判断它们是否重叠并返回结果。




​	  **示例 1:**

```javascript
输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
输出：true
```
**示例 2:**
```javascript
输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
输出：false
```
**提示：**

 1. 两个矩形 rec1 和 rec2 都以含有四个整数的列表的形式给出。
 2. 矩形中的所有坐标都处于 -10^9 和 10^9 之间。
 3. x 轴默认指向右，y 轴默认指向上。
 4. 你可以仅考虑矩形是正放的情况。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rectangle-overlap
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
 1. 两个矩形有4种不重叠的情况，即rec1在rec2的上下左右侧，返回false
 

 2. 否则，返回true：
 	

### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、两个矩形有4种不重叠的情况，即rec1在rec2的上下左右侧，返回false
2、否则，返回true
*/
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  // 1、两个矩形有4众不重叠的情况，即rec1在rec2的上下左右侧，返回false
  if (
    rec1[2] <= rec2[0] ||
    rec1[0] >= rec2[2] ||
    rec1[1] >= rec2[3] ||
    rec1[3] <= rec2[1]
  ) {
    return false;
  }
  // 2、否则，返回true
  return true;
};

```


### 2.2、TypeScript Solution

```javascript
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    if (
        rec1[2] <= rec2[0] ||
        rec1[0] >= rec2[2] ||
        rec1[1] >= rec2[3] ||
        rec1[3] <= rec2[1]
      ) {
        return false;
      }
   
      return true;
};
```

