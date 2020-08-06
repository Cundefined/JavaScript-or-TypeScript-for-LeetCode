/*
解题思路：DFS + 回溯法
1、创建空数组，保存结果
2、定义dfs函数，建立深度搜索树，参数依次为源数组，当前开始节点，当前可访问的原数组的索引位置：
    2.1、把当前开始节点先保存进结果数组中
    2.2、for循环从currStartIndex开始遍历数组：
        2.2.1、把originArray的当前元素放进currStartNode数组
        2.2.2、继续dfs处理currStartIndex后的数组元素
        2.2.3、遍历到到最深处之后，需要弹出currStartIndex末尾的元素，回溯遍历其他节点
3、调用dfs函数，开始构建深度搜索树，并返回结果数组
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 1、创建空数组，保存结果
  let result = [];

  // 2、定义dfs函数：
  function dfs(originArray, currStartNode, currStartIndex) {
    // 2.1、把当前开始节点先保存进结果数组中
    result.push([...currStartNode]);

    // 2.2、for循环从currStartIndex开始遍历数组：
    for (let i = currStartIndex; i < originArray.length; i++) {
      // 2.2.1、把originArray的当前元素放进currStartNode数组
      currStartNode.push(originArray[i]);

      // 2.2.2、继续dfs处理currStartIndex后的数组元素
      dfs(originArray, currStartNode, i + 1);

      // 2.2.3、遍历到到最深处之后，需要弹出currStartIndex末尾的元素，回溯遍历其他节点
      currStartNode.pop();
    }
  }

  // 3、调用dfs函数，开始构建深度搜索树，并返回结果数组
  dfs(nums, [], 0);
  return result;
};
