# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 04 )  二维数组中的查找**](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)
     




## 2、解题思路
```javascript
从矩阵的右上角开始查找:
    1、如果找到了，返回true
    2、如果值比target小，则说明这一行都比target小，row往下移一行 row++
    3、如果值比target大，说明这一列都比target大，col往左移一行 col--
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  //从右上角开始
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    // 1、如果找到了，返回true
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      // 2、如果值比target小，则说明这一行都比target小，row往下移一行 row++
      row++;
    } else {
      // 3、如果值比target大，说明这一列都比target大，col往左移一行 col--
      col--;
    }
  }

  return false;
};
```

### 2.2、TypeScript Solution

```javascript
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows: number = matrix.length;
  const cols: number = matrix[0].length;

  //从右上角开始
  let row: number = 0;
  let col: number = cols - 1;

  while (row < rows && col >= 0) {
    // 1、如果找到了，返回true
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      // 2、如果值比target小，则说明这一行都比target小，row往下移一行 row++
      row++;
    } else {
      // 3、如果值比target大，说明这一列都比target大，col往左移一行 col--
      col--;
    }
  }

  return false;
}
```

