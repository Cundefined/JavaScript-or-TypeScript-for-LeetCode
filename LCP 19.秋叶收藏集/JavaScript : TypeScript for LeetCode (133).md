# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LCP 19 )  秋叶收藏集**](https://leetcode-cn.com/problems/UlBDOe/)
      


## 2、解题思路
**方法：动态规划**
```javascript

1、状态：f[i][j] 前i个字符组成第j种组合（j取0，1，2分别对应红，红黄，红黄红）所需要的最小调整次数

2、状态转移方程
    2.1、f[i][0] : 使前i个字符组成【红】所需要的最小调整次数
        1）只能由【红】转移得到 -> f[i][0] = f[i-1][0] + (leaves[i] == 'r' ? 0 : 1)
    2.2、f[i][1] : 使前i个字符组成【红黄】所需要的最小调整次数
        1）可由【红】转移得到 -> f[i][1] = f[i-1][0] + (leaves[i] == 'y' ? 0 : 1) 
        2）可由【红黄】转移得到 -> f[i][1] = f[i - 1][1] + (leaves[i] == 'y' ? 0 : 1) 
    2.3、f[i][2] : 使前i个字符组成【红黄红】所需要的最小调整次数
        1）可由【红黄】转移得到 -> f[i][2]  = f[i-1][1] + (leaves[i] == 'r' ? 0 : 1) 
        2）可由【红黄红】转移得到 -> f[i][2] = f[i-1][2] + (leaves[i] == 'r' ? 0 : 1);

```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function (leaves) {
  // 1、状态
  const dp = new Array(leaves.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(3);
  }
  // 2、初始化，第一片叶子只可能是【红】状态
  dp[0][0] = leaves[0] === "r" ? 0 : 1;

  // 3、遍历所有叶子集
  for (let i = 1; i < leaves.length; i++) {
    //从第二片叶子，有可能是【红】->【红】，【红】->【红黄】
    dp[i][0] = dp[i - 1][0] + (leaves[i] == "r" ? 0 : 1);
    dp[i][1] = dp[i - 1][0] + (leaves[i] == "y" ? 0 : 1);

    //从第三片叶子，还有可能是【红黄】->【红黄】，【红黄】->【红黄红】
    if (i > 1) {
      dp[i][1] = Math.min(dp[i][1], dp[i - 1][1] + (leaves[i] == "y" ? 0 : 1));
      dp[i][2] = dp[i - 1][1] + (leaves[i] == "r" ? 0 : 1);
    }

    //从第四片叶子，还有可能是【红黄红】->【红黄红】
    if (i > 2) {
      dp[i][2] = Math.min(dp[i][2], dp[i - 1][2] + (leaves[i] == "r" ? 0 : 1));
    }
  }

  return dp[leaves.length - 1][2];
};
```

### 2.2、TypeScript Solution

```javascript
function minimumOperations(leaves: string): number {
  // 1、状态
  const dp: number[][] = new Array<number[]>(leaves.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array<number>(3);
  }
  // 2、初始化，第一片叶子只可能是【红】状态
  dp[0][0] = leaves[0] === "r" ? 0 : 1;

  // 3、遍历所有叶子集
  for (let i = 1; i < leaves.length; i++) {
    //从第二片叶子，有可能是:
    // 【红】->【红】
    dp[i][0] = dp[i - 1][0] + (leaves[i] == "r" ? 0 : 1);
    // 【红】->【红黄】
    dp[i][1] = dp[i - 1][0] + (leaves[i] == "y" ? 0 : 1);

    //从第三片叶子，需要额外考虑:
    if (i > 1) {
      // 【红黄】->【红黄】
      dp[i][1] = Math.min(dp[i][1], dp[i - 1][1] + (leaves[i] == "y" ? 0 : 1));
      // 【红黄】->【红黄红】
      dp[i][2] = dp[i - 1][1] + (leaves[i] == "r" ? 0 : 1);
    }

    //从第四片叶子，需要额外考虑：
    if (i > 2) {
      // 【红黄红】->【红黄红】
      dp[i][2] = Math.min(dp[i][2], dp[i - 1][2] + (leaves[i] == "r" ? 0 : 1));
    }
  }

  return dp[leaves.length - 1][2];
}
```

