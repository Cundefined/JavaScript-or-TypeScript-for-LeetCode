# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第904题 )  水果成篮**
       
在一排树中，第 i 棵树产生 tree[i] 型的水果。
你可以从你选择的任何树开始，然后重复执行以下步骤：

把这棵树上的水果放进你的篮子里。如果你做不到，就停下来。
移动到当前树右侧的下一棵树。如果右边没有树，就停下来。
请注意，在选择一颗树后，你没有任何选择：你必须执行步骤 1，然后执行步骤 2，然后返回步骤 1，然后执行步骤 2，依此类推，直至停止。

你有两个篮子，每个篮子可以携带任何数量的水果，但你希望每个篮子只携带一种类型的水果。
用这个程序你能收集的水果总量是多少？



​**示例 1:**

```javascript
输入：[1,2,1]
输出：3
解释：我们可以收集 [1,2,1]。
```
**示例 2:**
```javascript
输入：[0,1,2,2]
输出：3
解释：我们可以收集 [1,2,2].
如果我们从第一棵树开始，我们将只能收集到 [0, 1]。
```
**示例 3:**
```javascript
输入：[1,2,3,2,2]
输出：4
解释：我们可以收集 [2,3,2,2].
如果我们从第一棵树开始，我们将只能收集到 [1, 2]。
```
**示例 4:**
```javascript
输入：[3,3,3,1,2,1,1,2,3,3,4]
输出：5
解释：我们可以收集 [1,2,1,1,2].
如果我们从第一棵树或第八棵树开始，我们将只能收集到 4 个水果。
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fruit-into-baskets
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：滑动窗口
 1. 创建map字典，键为数组当前元素，值为该元素索引
**注意**：map最多只允许有两项键值对，分别对应两个篮子，每个篮子只允许放入一种水果
 

 2. 创建两个指针变量i、fruitOnePostion，分别用于变量给定数组和更新放入篮子的第一种水果的起始位置
 	
 3. 创建记录水果最大数量的变量fruitMaxCount，题目要求至少为1
 	
 4. for循环遍历数组：
 	4.1、把当前水果加入map中
    4.2、判断map中是否超过两项键值对（最多两个篮子）：
    

		4.2.1、若是，则计算应该删除哪一项，应该删除最前面的那项，即值最小的，先创建一个最小索引值的变量，初始化为数组的长度
        4.2.2、for of循环遍历map，各项的值和minIndex比较，取最小的去更新minIndex
        4.2.3、删除map中键为tree[minIndex]的项
        4.2.4、同时需要把fruitOnePostion移到minIndex + 1位置，用于后续计算水果数量
        
        

 	4.3、计算更新fruitMaxCount
 	

 5. 返回fruitMaxCount

### 2.1、JavaScript Solution

```javascript
/*
解题思路：滑动窗口
1、创建map字典，键为数组当前元素，值为该元素索引
注意：map最多只允许有两项键值对，分别对应两个篮子，每个篮子只允许放入一种水果
2、创建两个指针变量i、fruitOnePostion，分别用于变量给定数组和更新放入篮子的第一种水果的起始位置
3、创建记录水果最大数量的变量fruitMaxCount，题目要求至少为1
4、for循环遍历数组：
    4.1、把当前水果加入map中
    4.2、判断map中是否超过两项键值对（最多两个篮子）：
        4.2.1、若是，则计算应该删除哪一项，应该删除最前面的那项，即值最小的，先创建一个最小索引值的变量，初始化为数组的长度
        4.2.2、for of循环遍历map，各项的值和minIndex比较，取最小的去更新minIndex
        4.2.3、删除map中键为tree[minIndex]的项
        4.2.4、同时需要把fruitOnePostion移到minIndex + 1位置，用于后续计算水果数量
    4.3、计算更新fruitMaxCount
5、返回fruitMaxCount
*/
/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {

  // 1、创建map字典，键为数组当前元素，值为该元素索引
  const map = new Map();

  // 2、创建两个指针变量i、fruitOnePostion，分别用于变量给定数组和更新放入篮子的第一种水果的起始位置
  let i = 0;
  let fruitOnePostion = 0;

  // 3、创建记录水果最大数量的变量fruitMaxCount，题目要求至少为1
  let fruitMaxCount = 1;

  // 4、for循环遍历数组：
  for (i; i < tree.length; i++) {
    // 4.1、把当前水果加入map中
    map.set(tree[i], i);

    // 4.2、判断map中是否超过两项键值对（最多两个篮子）：
    if (map.size > 2) {
      // 4.2.1、若是，则计算应该删除哪一项，应该删除最前面的那项，即值最小的，先创建一个最小索引值的变量，初始化为数组的长度
      let minIndex = tree.length - 1;

      // 4.2.2、循环遍历map，各项的值和minIndex比较，取最小的去更新minIndex
      for (let [fruit, index] of map) {
        if (index < minIndex) {
          minIndex = index;
        }
      }

      // 4.2.3、删除map中键为tree[minIndex]的项
      map.delete(tree[minIndex]);

      // 4.2.4、同时需要把fruitOnePostion移到minIndex + 1位置，用于后续计算水果数量
      fruitOnePostion = minIndex + 1;
    }
    // 4.3、计算更新fruitMaxCount
    fruitMaxCount = Math.max(fruitMaxCount, i - fruitOnePostion + 1);
  }

  // 5、，并返回
  return fruitMaxCount;
};
```


### 2.2、TypeScript Solution

```javascript
function totalFruit(tree: number[]): number {

  const map: Map<number, number> = new Map();

  let i: number = 0;
  let fruitOnePostion: number = 0;

  let fruitMaxCount: number = 1;

  for (i; i < tree.length; i++) {

    map.set(tree[i], i);

    if (map.size > 2) {
      let minIndex: number = tree.length - 1;

      for (let [fruit, index] of map) {
        if (index < minIndex) {
          minIndex = index;
        }
      }

      map.delete(tree[minIndex]);

      fruitOnePostion = minIndex + 1;
    }

    fruitMaxCount = Math.max(fruitMaxCount, i - fruitOnePostion + 1);
  }

  return fruitMaxCount;
};
```

