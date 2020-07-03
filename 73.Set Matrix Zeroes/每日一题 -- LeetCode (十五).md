# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第73题 )  矩阵置零**
       给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

​	  **示例 1:**

```javascript
输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```
**示例 2:**
```javascript
输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/set-matrix-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 由于只能在原矩阵中置0，所以选择矩阵第一行、第一列作为当前行列是否需要置0
 

 2. 检查并标记第一行、第一列是否有0，防止后面置的0造成干扰，创建两个变量分别记录第一行、第一列是否有0：
 	2.1、检查第一行是否有0
 	2.2、检查第一列是否有0
 3. 使用第一行、第一列来标记剩余其他行列是否含有0：
 	3.1、如果当前元素为0的话，就把他对应映射到第一行、第一列位置的元素标记为0
 4. 利用3的标0情况，把对应整行、整列全置0：
 	4.1、如果当前元素所在行或者列对应映射到第一行、第一列位置的元素为0的话，就把当前位置元素置0
 5. 最后，单独处理第一行、第一列：
 	5.1、如果firstRowHasZero为true,则说明第一行原来就有0，应该把第一行全部置0
 	5.2、如果firstColHasZero为true,则说明第一列原来就有0，应该把第一列全部置0

### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、由于只能在原矩阵中置0，所以选择矩阵第一行、第一列作为当前行列是否需要置0
2、检查并标记第一行、第一列是否有0，防止后面置的0造成干扰，创建两个变量分别记录第一行、第一列是否有0
    2.1、检查第一行是否有0
    2.1、检查第一列是否有0
3、使用第一行、第一列来标记剩余其他行列是否含有0
    3.1、如果当前元素为0的话，就把他对应映射到第一行、第一列位置的元素标记为0
4、利用3的标0情况，把对应整行、整列全置0
    4.1、如果当前元素所在行或者列对应映射到第一行、第一列位置的元素为0的话，就把当前位置元素置0
5、最后，单独处理第一行、第一列
    5.1、如果firstRowHasZero为true,则说明第一行原来就有0，应该把第一行全部置0
    5.2、如果firstColHasZero为true,则说明第一列原来就有0，应该把第一列全部置0
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 1、由于只能在原矩阵中置0，所以选择矩阵第一行、第一列作为当前行列是否需要置0
  // 2、检查并标记第一行、第一列是否有0，防止后面置的0造成干扰，创建两个变量分别记录第一行、第一列是否有0
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // 2.1、检查第一行是否有0
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // 2.2、检查第一列是否有0
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // 3、使用第一行、第一列来标记剩余其他行列是否含有0
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      // 3.1、如果当前元素为0的话，就把他对应映射到第一行、第一列位置的元素标记为0
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  // 4、利用3的标0情况，把对应整行、整列全置0
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      // 4.1、如果当前元素所在行或者列对应映射到第一行、第一列位置的元素为0的话，就把当前位置元素置0
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  // 5、最后，单独处理第一行、第一列
  // 5.1、如果firstRowHasZero为true,则说明第一行原来就有0，应该把第一行全部置0
  if (firstRowHasZero) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }
  // 5.2、如果firstColHasZero为true,则说明第一列原来就有0，应该把第一列全部置0
  if (firstColHasZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
};
```


### 2.2、TypeScript Solution

```javascript
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let firstRowHasZero: boolean = false;
  let firstColHasZero: boolean = false;

  for (let col: number = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  for (let row: number = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  for (let row: number = 1; row < matrix.length; row++) {
    for (let col: number = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  for (let row: number = 1; row < matrix.length; row++) {
    for (let col: number = 1; col < matrix[0].length; col++) {
      if (matrix[0][col] === 0 || matrix[row][0] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (firstRowHasZero) {
    for (let col: number = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  if (firstColHasZero) {
    for (let row: number = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
}
```

