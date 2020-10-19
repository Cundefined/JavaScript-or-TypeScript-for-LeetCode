# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( 剑指 Offer 39 )  数组中出现次数超过一半的数字**](https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/)
      


## 2、解题思路
**方法一：哈希表**
```javascript
1、利用map字典，遍历统计每个元素出现的次数
2、找到map中出现次数超过数长度一半的那个元素

时间 -- O(N)
空间 -- O(N)
```
**方法二：摩尔投票法**
```java
正反抵消原则：
    1、发现目标 票数+1
    2、发现非目标 票数-1
如果遍历结束，发现票数为正，则说明目标数量大于半数

时间 -- O(N)
空间 -- O(1)
```

### 2.1、JavaScript Solution
**方法一：哈希表**
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  for (const item of nums) {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      map.set(item, map.get(item) + 1);
    }
  }

  for (const keyValue of map) {
    if (keyValue[1] >= nums.length / 2) {
      return keyValue[0];
    }
  }
};

```

### 2.2、TypeScript Solution
**方法二：摩尔投票法**
```javascript
function majorityElement(nums: number[]): number {
    let vote: number = 0;
    let target: number = nums[0];

    for (const num of nums) {
        if (vote === 0) {
            target = num;
            vote++;
        } else if (target === num) {
            vote++;
        } else {
            vote--;
        }
    }

    return target;
};
```

