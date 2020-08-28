# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第120题 )  三角形最小路径和**
    
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。



例如，给定三角形：

```typescript
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
```
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

**说明：**

如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


## 2、解题思路
方法：动态规划
```javascript
动态规划简介：
缓存已经被计算的值（称为：记忆化搜索 本质上：动态规划）
动态规划就是把大问题变成小问题，并解决了小问题重复计算的方法称为【动态规划】
动态规划：是一种解决问 题的思想，大规模问题的结果，是由小规模问 题的结果运算得来的。动态规划可用递归来实现(Memorization Search)
注意：动规四要素 -- 状态 State 灵感，创造力，存储小规模问题的结果
                 方程 Function 状态之间的联系，怎么通过小的状态，来算大的状态（递推公式）
                 初始化 Intialization 最极限的小状态是什么, 起点
                 答案 Answer 最大的那个状态是什么，终点
     动规四种类型问题 -- Matrix DP (10%) Sequence (40%) Two Sequences DP (40%) Backpack (10%)

1、记录三角形的行数，其每行的最大列数其实等于行数的数值（等腰直角三角形）
2、【一、状态定义】：dp[i][j] 表示从第i行,j列的元素出发，到达最后一层的最短路径和
3、【二、初始化】
4、【三、递推求解】
5、【四、返回答案】
注意：动态规划两个核心部分 -- 1、确定“DP状态”，2、确定“DP转移方程”（递推公式）
```
**总之：**
动态规划四步骤：

		 1. 状态定义
		 2. 初始化
		 3. 递推求解
		 4. 返回答案

### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // 1、记录三角形的行数，其每行的最大列数其实等于行数的数值（等腰直角三角形）
  let rows = triangle.length;

  // // 2、【一、状态定义】：dp[i][j] 表示从第i行,j列的元素出发，到达最后一层的最短路径和
  // let dp = new Array(rows + 1);
  // for (let i = 0; i < dp.length; i++) {
  //   dp[i] = new Array(rows + 1);
  // }

  // // 3、【二、初始化】
  // dp[rows].fill(0);
  // 优化空间复杂度，其实用一维数组来记录就可以了
  let dp = new Array(rows + 1);

  dp.fill(0);

  // 4、【三、递推求解】
  //从最后一行往第一行遍历（自下而上）
  for (let row = rows - 1; row >= 0; row--) {
    //遍历当前行的每一列
    for (let col = 0; col <= row; col++) {
      dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
    }
  }
  // 5、【四、返回答案】
  return dp[0];
};
```

### 2.2、TypeScript Solution

```javascript
function minimumTotal(triangle: number[][]): number {
  let rows: number = triangle.length;

  //   一、状态定义
  let dp: number[] = new Array<number>(rows + 1);

  //   二、初始化
  dp.fill(0);

  //   三、递推求解
  for (let row: number = rows - 1; row >= 0; row--) {
    for (let col: number = 0; col <= row; col++) {
      dp[col] = Math.min(dp[col], dp[col + 1]) + triangle[row][col];
    }
  }
  //   四、返回答案
  return dp[0];
}
```

