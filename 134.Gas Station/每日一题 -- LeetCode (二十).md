# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第134题 )  加油站**
       在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。

**说明:** 

 - 如果题目有解，该答案即为唯一答案。
 -  输入数组均为非空数组，且长度相同。 
 - 输入数组中的元素均为非负数。



​	  **示例 1:**

```javascript
输入: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

输出: 3

解释:
从 3 号加油站(索引为 3 处)出发，可获得 4 升汽油。此时油箱有 = 0 + 4 = 4 升汽油
开往 4 号加油站，此时油箱有 4 - 1 + 5 = 8 升汽油
开往 0 号加油站，此时油箱有 8 - 2 + 1 = 7 升汽油
开往 1 号加油站，此时油箱有 7 - 3 + 2 = 6 升汽油
开往 2 号加油站，此时油箱有 6 - 4 + 3 = 5 升汽油
开往 3 号加油站，你需要消耗 5 升汽油，正好足够你返回到 3 号加油站。
因此，3 可为起始索引。
```
**示例 2:**
```javascript
输入: 
gas  = [2,3,4]
cost = [3,4,3]

输出: -1

解释:
你不能从 0 号或 1 号加油站出发，因为没有足够的汽油可以让你行驶到下一个加油站。
我们从 2 号加油站出发，可以获得 4 升汽油。 此时油箱有 = 0 + 4 = 4 升汽油
开往 0 号加油站，此时油箱有 4 - 3 + 2 = 3 升汽油
开往 1 号加油站，此时油箱有 3 - 3 + 3 = 3 升汽油
你无法返回 2 号加油站，因为返程需要消耗 4 升汽油，但是你的油箱只有 3 升汽油。
因此，无论怎样，你都不可能绕环路行驶一周。
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gas-station
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 1. 创建两个变量，totalStationGas保存所有加油站汽油的总和，totalTravalCost保存所有路程耗油总和
 

 1. for循环遍历加油站，统计totalStationGas和totalTravalCost
 2. 如果总汽油<总消耗，那肯定不行，直接返回-1
 3. 创建两个变量，currentGas记录当前汽车的汽油量，startStation记录起点加油站的索引
 4. for循环遍历加油站：
 5.1、计算从当前加油站，前往下一个加油站，汽车将会剩下的汽油数量
5.2、如果将会剩下的汽油<0,那么说明当前加油站，到达不了下一站，则应该以下一站作为起点，同时清零汽车的汽油，重新出发
 5. 遍历所有加油站之后，返回起点索引

### 2.1、JavaScript Solution

```javascript
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
```


### 2.2、TypeScript Solution

```javascript
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalStationGas: number = 0;
  let totalTravalCost: number = 0;

  for (let i: number = 0; i < gas.length; i++) {
    totalStationGas += gas[i];
    totalTravalCost += cost[i];
  }

  if (totalStationGas < totalTravalCost) {
    return -1;
  }

  let currentGas: number = 0;
  let startStation: number = 0;

  for (let i: number = 0; i < gas.length; i++) {
    currentGas = currentGas + gas[i] - cost[i];
    if (currentGas < 0) {
      startStation = i + 1;
      currentGas = 0;
    }
  }
  return startStation;
}
```

