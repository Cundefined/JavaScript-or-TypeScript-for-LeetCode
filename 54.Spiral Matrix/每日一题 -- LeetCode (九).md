# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第54题 )  螺旋矩阵**
      给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。


​	  **示例 1:**

```javascript
输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
```
**示例 2:**

```javascript
输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/spiral-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 判断输入是否为空，为空就返回空数组

 2. 用left、right、top、bottom定义4个边界
 3. 初始化遍历方向，依次是向右、下、左、上，顺时针螺旋
 4. 初始化结果数组
 5. while循环，只要左边界小于等于右边界，并且上边界小于等于下边界，就一直螺旋遍历：

      5.1、依次按照向右、下、左、上的方向遍历二维数组，并且将沿途的元素保存在结果数组

 6. 返回结果数组


### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、判断输入是否为空，为空就返回空数组
2、用left、right、top、bottom定义4个边界
3、初始化遍历方向，依次是向右、下、左、上，顺时针螺旋
4、初始化结果数组
5、while循环，只要左边界小于等于右边界，并且上边界小于等于下边界，就一直螺旋遍历：
    5.1、依次按照向右、下、左、上的方向遍历二维数组，并且将沿途的元素保存在结果数组
6、返回结果数组
*/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 1、判断输入是否为空，为空就返回空数组
  if (matrix.length === 0) {
    return [];
  }

  // 2、用left、right、top、bottom定义4个边界以及当前方向
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  // 3、初始化遍历方向，依次是向右、下、左、上，顺时针螺旋
  let direction = "right";

  // 4、初始化结果数组
  let result = [];

  // 5、while循环，只要左边界小于等于右边界，并且上边界小于等于下边界，就一直螺旋遍历：
  while (left <= right && top <= bottom) {
    //  5.1、依次按照向右、下、左、上的方向遍历二维数组，并且将沿途的元素保存在结果数组
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = "bottom";
    } else if (direction === "bottom") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "top";
    } else if (direction === "top") {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }

  // 6、返回结果数组
  return result;
};
```


### 2.2、TypeScript Solution

```javascript
function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) {
    return [];
  }

  let top: number = 0;
  let right: number = matrix[0].length - 1;
  let bottom: number = matrix.length - 1;
  let left: number = 0;

  let direction: string = "right";
  let result: number[] = [];

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i: number = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = "bottom";
    } else if (direction === "bottom") {
      for (let i: number = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i: number = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "top";
    } else if (direction === "top") {
      for (let i: number = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }
  return result;
}
```

