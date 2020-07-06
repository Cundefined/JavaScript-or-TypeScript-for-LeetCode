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
