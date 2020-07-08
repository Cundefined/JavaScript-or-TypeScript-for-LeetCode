# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第187题 )  重复的DNA序列**
       

所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

编写一个函数来查找目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。



 **示例 :**

```javascript
输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC", "CCCCCAAAAA"]
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/repeated-dna-sequences
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路

 解题思路：滑动窗口（固定尺寸，滑动，就是窗户啊）

 1. 创建map字典，键为窗口遍历到的字符串，值为该字符串出现的次数
 2. 创建存储结果的数组
 3. 遍历输入的字符串：
 	3.1、截取窗口覆盖的字符串
    3.2、如果map没有当前字符串，就加进map，键为当前字符串，值为1
    3.3、如果map有当前字符串且值为1的话，那此次添加就会超过1次，次数加1，然后push进结果数组中
 4. 遍历完之后，返回结果数组 


### 2.1、JavaScript Solution

```javascript
/*
解题思路：滑动窗口（固定尺寸，滑动，就是窗户啊）
1、创建map字典，键为窗口遍历到的字符串，值为该字符串出现的次数
2、创建存储结果的数组
3、遍历输入的字符串：
    3.1、截取窗口覆盖的字符串
    3.2、如果map没有当前字符串，就加进map，键为当前字符串，值为1
    3.3、如果map有当前字符串且值为1的话，那此次添加就会超过1次，次数加1，然后push进结果数组中
4、遍历完之后，返回结果数组  
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // 1、创建map字典，键为窗口遍历到的字符串，值为该字符串出现的次数
  let map = new Map();

  // 2、创建存储结果的数组
  let result = [];

  // 3、遍历输入的字符串：
  for (let i = 0; i < s.length - 9; i++) {
    // 3.1、截取窗口覆盖的字符串
    let sequences = s.substring(i, i + 10);

    // 3.2、如果map没有当前字符串，就加进map，键为当前字符串，值为1
    if (!map.has(sequences)) {
      map.set(sequences, 1);
    } else if (map.get(sequences) === 1) {
      // 3.3、如果map有当前字符串且值为1的话，那此次添加就会超过1次，次数加1，然后push进结果数组中
      map.set(sequences, 2);
      result.push(sequences);
    }
  }

  // 4、遍历完之后，返回结果数组
  return result;
};
```


### 2.2、TypeScript Solution

```javascript
function findRepeatedDnaSequences(s: string): string[] {
    let map: Map<string, number> = new Map();

    let result: string[] = [];

    for (let i: number = 0; i < s.length - 9; i++) {
        let sequences: string = s.substring(i, i + 10);

        if (!map.has(sequences)) {
            map.set(sequences, 1);
        } else if (map.get(sequences) === 1) {
            map.set(sequences, 2);
            result.push(sequences);
        }

    }

    return result;
};
```

