# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第74题 )  搜索二维矩阵**
      
   编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

 - 每行中的整数从左到右按升序排列。 
 - 每行的第一个整数大于前一行的最后一个整数。


**示例 1:**

```typescript
输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
输出: true
```
**示例 2:**
```typescript
输入:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
输出: false
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-a-2d-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
方法：二分查找
```javascript
1、边界条件预判：如果矩阵为空，返回false
2、标准的二分查找模板
注意：需要将展平后的mid索引，转换为mid元素在矩阵的行和列坐标
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 1、边界条件预判：如果矩阵为空，返回false
  if (matrix.length === 0) {
    return false;
  }

  let row = matrix.length;
  let column = matrix[0].length;

  let left = 0;
  let right = row * column - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    // 将展平后的mid索引，转换为mid元素在矩阵的行和列坐标
    let midPosRow = Math.floor(mid / column);
    let midPosColumn = mid % column;

    if (matrix[midPosRow][midPosColumn] === target) {
      return true;
    } else if (matrix[midPosRow][midPosColumn] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
```

### 2.2、TypeScript Solution

```typescript
function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0) {
    return false;
  }

  let row: number = matrix.length;
  let column: number = matrix[0].length;

  let left: number = 0;
  let right: number = row * column - 1;

  while (left <= right) {
    let mid: number = left + Math.floor((right - left) / 2);

    // 将展平后的mid索引，转换为mid元素在矩阵的行和列坐标
    let midPosRow: number = Math.floor(mid / column);
    let midPosColumn: number = mid % column;

    if (matrix[midPosRow][midPosColumn] === target) {
      return true;
    } else if (matrix[midPosRow][midPosColumn] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
```

