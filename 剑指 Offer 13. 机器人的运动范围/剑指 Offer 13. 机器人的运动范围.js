/*
解题思路：深度优先搜索
1、创建二维数组记录每个方格是否被访问过
2、从起点（0，0）位置开始搜索可以到达的方格
3、创建深度优先递归实现的函数
  3.1、递归结束条件:
      3.1.1、当前点越界，停止递归
      3.1.2、当前点行坐标和列坐标的数位之和大于k，停止递归
      3.1.2、当前点已经访问过，停止递归
  3.2、记录一下当前点已经被访问
  3.3、当前位置已经到达，也要计算进去+1，继续递归上下左右的方格，加进总的可到达方格数
4、创建计算数位之和的函数
*/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  // 1、创建二维数组记录每个方格是否被访问过
  const isVisited = new Array(m);
  for (let i = 0; i < isVisited.length; i++) {
    isVisited[i] = new Array(n);
  }
  //2、从起点（0，0）位置开始搜索可以到达的方格
  let res = dfs(m, n, k, 0, 0);
  return res;

  //3、创建深度优先递归实现的函数
  function dfs(m, n, k, currX, currY) {
    //   3.1、递归结束条件:
    //      3.1.1、当前点越界，停止递归
    //      3.1.2、当前点行坐标和列坐标的数位之和大于k，停止递归
    //      3.1.2、当前点已经访问过，停止递归
    if (
      currX < 0 ||
      currX > m - 1 ||
      currY < 0 ||
      currY > n - 1 ||
      digitSum(currX) + digitSum(currY) > k ||
      isVisited[currX][currY] === true
    ) {
      return 0;
    }

    //  3.2、记录一下当前点已经被访问
    isVisited[currX][currY] = true;

    // 3.3、当前位置已经到达，也要计算进去+1，继续递归上下左右的方格，加进总的可到达方格数
    return (
      1 +
      dfs(m, n, k, currX + 1, currY) +
      dfs(m, n, k, currX - 1, currY) +
      dfs(m, n, k, currX, currY + 1) +
      dfs(m, n, k, currX, currY - 1)
    );
  }

  //4、创建计算数位之和的函数
  function digitSum(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  }
};
