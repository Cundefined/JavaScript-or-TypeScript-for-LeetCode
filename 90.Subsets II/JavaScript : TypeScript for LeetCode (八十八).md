# 是差点运气，可我一直在努力！
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***



## 1、题目要求
[**( LeetCode-第90题 )  子集 II**](https://leetcode-cn.com/problems/subsets-ii/)
       




## 2、解题思路
**方法：递归回溯法**
```javascript
1、创建两个空数组，分别保存单个子集，所有子集，res作为最终返回的二维结果数组
2、创建集合，用来保存所有子集，集合可以防止出现重复的子集
3、排序数组，从小到大，可以将重复的元素放在一起，这样重复只会出现在下一次选择中，方便判断
4、调用递归回溯函数，开始生成子集
5、执行结束后，将集合转成数组并返回
```


### 2.1、JavaScript Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // 1、创建两个空数组，分别保存单个子集，所有子集，res作为最终返回的二维结果数组
  const subSetItem = [];
  const res = [];
  // 2、创建集合，用来保存所有子集，集合可以防止出现重复的子集
  const set = new Set();

  // 3、排序数组，从小到大，可以将重复的元素放在一起，这样重复只会出现在下一次选择中，方便判断
  nums.sort();

  // 4、调用递归回溯函数，开始生成子集
  generate(0, nums, subSetItem, set);

  // 5、执行结束后，将集合转成数组并返回
  set.forEach((item) => {
    res.push(item.split(";"));
  });
  res.unshift([]);

  return res;

  // 创建递归回溯函数，用于生成所有子集
  function generate(index, nums, subSetItem, set) {
    // 递归结束条件，遍历完整个nums数组就退出
    if (index > nums.length - 1) {
      return;
    }
    // 【选择】当前元素
    subSetItem.push(nums[index]);

    let itemStr = subSetItem.join(";");
    // 将当前子集加入结果集合中,[...subSetItem]深拷贝，每个数组地址都不同，要是浅拷贝指向的地址就都是同一个了
    // 这样，set中不能存在相同的元素（数组地址相同就是同一个数组），所有只会保留最开始加进去的空数组
    // 所以应该用深拷贝，而且还得做判断
    if (!set.has(itemStr)) {
      set.add(itemStr);
    }

    // 继续考虑是否要选择下一个元素
    generate(index + 1, nums, subSetItem, set);

    // 【撤销】当前选择，回溯
    subSetItem.pop();
    // 重新考虑是否要选择下一个元素
    generate(index + 1, nums, subSetItem, set);
  }
};
```

