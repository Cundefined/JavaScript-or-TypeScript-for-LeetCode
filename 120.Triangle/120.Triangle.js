/*
解题思路：动态规划
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
*/
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
