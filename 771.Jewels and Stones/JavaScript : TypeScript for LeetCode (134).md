# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第771题 )   宝石与石头**](https://leetcode-cn.com/problems/jewels-and-stones/)
      


## 2、解题思路
**方法一、哈希表**
```javascript
哈希表HashMap
```

**方法二、利用字符的ASCII码**
```javascript
A ~ z的ASCII码：65 ~ 122
1、创建长度122-65+1=58的为数组，用于标记宝石
2、遍历S，只要发现宝石，就统计
```


### 2.1、JavaScript Solution
**方法一、哈希表**
```javascript
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const map = new Map();
    let count = 0;
    for(let i = 0; i < J.length; i++) {
            map.set(J[i], 1);
    }

    for(let j = 0; j < S.length; j++) {
        if(map.has(S[j])) {
           count++;
        }
    } 

    return count;
};
```

### 2.2、TypeScript Solution
**方法二、利用字符的ASCII码**
```javascript
function numJewelsInStones(J: string, S: string): number {
  const arr: number[] = new Array<number>(58);
  let count: number = 0;

  for (let i: number = 0; i < J.length; i++) {
    arr[J.charCodeAt(i) - 65] = 1;
  }

  for (let j: number = 0; j < S.length; j++) {
    if (arr[S.charCodeAt(j) - 65] === 1) {
      count++;
    }
  }

  return count;
}
```

