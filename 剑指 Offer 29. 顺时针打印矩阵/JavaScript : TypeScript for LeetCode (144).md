# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 29 )  顺时针打印矩阵**](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)
      


## 2、解题思路
```javascript
参考：【54.Spiral Matrix】
1、判断输入是否为空，为空就返回空数组
2、用left、right、top、bottom定义4个边界
3、初始化遍历方向，依次是向右、下、左、上，顺时针螺旋
4、初始化结果数组
5、while循环，只要左边界小于等于右边界，并且上边界小于等于下边界，就一直螺旋遍历：
    5.1、依次按照向右、下、左、上的方向遍历二维数组，并且将沿途的元素保存在结果数组
6、返回结果数组
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let rows = matrix.length;
  let cols = rows && matrix[0].length;

  const res = [];
  if (rows === 0 || cols === 0) {
    return res;
  }

  let left = 0;
  let right = cols - 1;
  let top = 0;
  let bottom = rows - 1;

  let direction = "toRight";

  while (left <= right && top <= bottom) {
    if (direction === "toRight") {
      for (let col = left; col <= right; col++) {
        res.push(matrix[top][col]);
      }
      top++;
      direction = "toBottom";
    } else if (direction === "toBottom") {
      for (let row = top; row <= bottom; row++) {
        res.push(matrix[row][right]);
      }
      right--;
      direction = "toLeft";
    } else if (direction === "toLeft") {
      for (let col = right; col >= left; col--) {
        res.push(matrix[bottom][col]);
      }
      bottom--;
      direction = "toUp";
    } else if (direction === "toUp") {
      for (let row = bottom; row >= top; row--) {
        res.push(matrix[row][left]);
      }
      left++;
      direction = "toRight";
    }
  }

  return res;
};

```

### 2.2、TypeScript Solution

```javascript
function spiralOrder(matrix: number[][]): number[] {
  let rows: number = matrix.length;
  let cols: number = rows && matrix[0].length;

  const res: number[] = [];
  if (rows === 0 || cols === 0) {
    return res;
  }

  let left: number = 0;
  let right: number = cols - 1;
  let top: number = 0;
  let bottom: number = rows - 1;

  let direction: string = "toRight";

  while (left <= right && top <= bottom) {
    if (direction === "toRight") {
      for (let col: number = left; col <= right; col++) {
        res.push(matrix[top][col]);
      }
      top++;
      direction = "toBottom";
    } else if (direction === "toBottom") {
      for (let row: number = top; row <= bottom; row++) {
        res.push(matrix[row][right]);
      }
      right--;
      direction = "toLeft";
    } else if (direction === "toLeft") {
      for (let col: number = right; col >= left; col--) {
        res.push(matrix[bottom][col]);
      }
      bottom--;
      direction = "toUp";
    } else if (direction === "toUp") {
      for (let row: number = bottom; row >= top; row--) {
        res.push(matrix[row][left]);
      }
      left++;
      direction = "toRight";
    }
  }

  return res;
}

```

