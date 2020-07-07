/*
解题思路：
1、创建两个变量，totalStationGas保存所有加油站汽油的总和，totalTravalCost保存所有路程耗油总和
2、for循环遍历加油站，统计totalStationGas和totalTravalCost
3、如果总汽油<总消耗，那肯定不行，直接返回-1
4、创建两个变量，currentGas记录当前汽车的汽油量，startStation记录起点加油站的索引
5、for循环遍历加油站：
    5.1、计算从当前加油站，前往下一个加油站，汽车将会剩下的汽油数量
    5.2、如果将会剩下的汽油<0,那么说明当前加油站，到达不了下一站，则应该以下一站作为起点，同时清零汽车的汽油，重新出发
6、遍历所有加油站之后，返回起点索引
*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // 1、创建两个变量，totalStationGas保存所有加油站汽油的总和，totalTravalCost保存所有路程耗油总和
  let totalStationGas = 0;
  let totalTravalCost = 0;

  // 2、for循环遍历加油站，统计totalStationGas和totalTravalCost
  for (let i = 0; i < gas.length; i++) {
    totalStationGas += gas[i];
    totalTravalCost += cost[i];
  }

  //   3、如果总汽油<总消耗，那肯定不行，直接返回-1
  if (totalStationGas < totalTravalCost) {
    return -1;
  }

  //   4、创建两个变量，currentGas记录当前汽车的汽油量，startStation记录起点加油站的索引
  let currentGas = 0;
  let startStation = 0;

  //   5、for循环遍历加油站：
  for (let i = 0; i < gas.length; i++) {
    //   5.1、计算从当前加油站，前往下一个加油站，汽车将会剩下的汽油数量
    currentGas = currentGas + gas[i] - cost[i];
    // 5.2、如果将会剩下的汽油<0,那么说明当前加油站，到达不了下一站，则应该以下一站作为起点，同时清零汽车的汽油，重新出发
    if (currentGas < 0) {
      startStation = i + 1;
      currentGas = 0;
    }
  }

  //   6、遍历所有加油站之后，返回起点索引
  return startStation;
};
