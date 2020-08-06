# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
**( LeetCode-第78题 )  子集**
       

给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。


 **示例 :**

```javascript
输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subsets
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：DFS + 回溯法
```javascript
1、创建空数组，保存结果
2、定义dfs函数，建立深度搜索树，参数依次为源数组，当前开始节点，当前可访问的原数组的索引位置：
    2.1、把当前开始节点先保存进结果数组中
    2.2、for循环从currStartIndex开始遍历数组：
        2.2.1、把originArray的当前元素放进currStartNode数组
        2.2.2、继续dfs处理currStartIndex后的数组元素
        2.2.3、遍历到到最深处之后，需要弹出currStartIndex末尾的元素，回溯遍历其他节点
3、调用dfs函数，开始构建深度搜索树，并返回结果数组
```

### 2.1、JavaScript Solution

```javascript
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
      console.log(currStartNode)
      dfs(originArray, currStartNode, i + 1);

      // 2.2.3、遍历到到最深处之后，需要弹出currStartIndex末尾的元素，回溯遍历其他节点
      currStartNode.pop();
    }
  }

  // 3、调用dfs函数，开始构建深度搜索树，并返回结果数组
  dfs(nums, [], 0);
  return result;
};
```


### 2.2、TypeScript Solution

```javascript
function subsets(nums: number[]): number[][] {

let result: number[][] = [];

function dfs(originArray: number[], currStartNode: number[], currStartIndex: number): void {

  result.push([...currStartNode]);

  for (let i: number = currStartIndex; i < originArray.length; i++) {

    currStartNode.push(originArray[i]);

    dfs(originArray, currStartNode, i + 1);

    currStartNode.pop();
  }
}


dfs(nums, [], 0);
return result;
}
```

