/*
解题思路：动态规划
1、创建一个一维记忆数组，再利用for循环往该数组里push空数组，得到一个二维数组
2、循环手动填充第一行、第一列的格子为1，因为到达这些格子都只有1条路径
3、遍历剩余的格子，二维数组遍历，两层for循环
    3.1、当前格子路径数应该等于其左边格子和上边格子的路径数相加
4、返回最后终点的路径数值
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 1、创建一个一维记忆数组，再利用for循环往该数组里push空数组，得到一个二维数组
    const memo = [];
    for (let i = 0; i < m; i++) {
        memo.push([]);
    }

    // 2、循环手动填充第一行、第一列的格子为1，因为到达这些格子都只有1条路径
    // 填充第一行格子的路径数为1
    for (let col = 0; col < n; col++) {
        memo[0][col] = 1;
    }
    // 填充第一列格子的路径数为1
    for (let row = 0; row < m; row++) {
        memo[row][0] = 1;
    }

    // 3、遍历剩余的格子，二维数组遍历，两层for循环
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            // 3.1、当前格子路径数应该等于其左边格子和上边格子的路径数相加
            memo[row][col] = memo[row][col -1] + memo[row -1][col];
        }
    }

    // 4、返回最后终点的路径数值
    return memo[m -1][n -1];



};