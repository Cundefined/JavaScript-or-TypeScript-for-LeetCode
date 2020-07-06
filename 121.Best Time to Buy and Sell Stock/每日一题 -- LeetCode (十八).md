# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第121题 )  买卖股票的最佳时机**
       给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。

​	  **示例 1:**

```javascript
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```
**示例 2:**
```javascript
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 预判，若输入数组为空，直接返回0
 

 2. 创建minPrice变量，保存当前找到的最低价格，maxProfit变量，记录当前可以获得的最大利润
 3. for循环，遍历输入数组：
 	3.1、如果当前价格<记录的最低价格，就更新最低价格为当前价格，此时价格在下跌，就不用更新最大利润了
    3.2、否则，价格在上涨，计算当前价格和最低价格之差，得到当前利润，如果当前利润大于最大利润，就更新最大利润
 5. 遍历结束后，返回最大利润

### 2.1、JavaScript Solution

```javascript
/*
解题思路：
1、预判，若输入数组为空，直接返回0
2、创建minPrice变量，保存当前找到的最低价格，maxProfit变量，记录当前可以获得的最大利润
3、for循环，遍历输入数组：
    3.1、如果当前价格<记录的最低价格，就更新最低价格为当前价格，此时价格在下跌，就不用更新最大利润了
    3.2、否则，价格在上涨，计算当前价格和最低价格之差，得到当前利润，如果当前利润大于最大利润，就更新最大利润
4、遍历结束后，返回最大利润
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 1、预判，若输入数组为空，直接返回0
  if (prices.length === 0) {
    return 0;
  }

  // 2、创建minPrice变量，保存当前找到的最低价格，maxProfit变量，记录当前可以获得的最大利润
  let minPrice = prices[0];
  let maxProfit = 0;

  // 3、for循环，遍历输入数组：
  for (let i = 0; i < prices.length; i++) {
    // 3.1、如果当前价格<记录的最低价格，就更新最低价格为当前价格，此时价格在下跌，就不用更新最大利润了
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      //  3.2、否则，价格在上涨，计算当前价格和最低价格之差，得到当前利润，如果当前利润大于最大利润，就更新最大利润
      maxProfit = prices[i] - minPrice;
    }
  }

  // 4、遍历结束后，返回最大利润
  return maxProfit;
};
```


### 2.2、TypeScript Solution

```javascript
function maxProfit(prices: number[]): number {
    if (prices.length === 0) {
        return 0;
    }

    let minPrice: number = prices[0];
    let maxProfit: number = 0;

    for (let i: number = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};
```

