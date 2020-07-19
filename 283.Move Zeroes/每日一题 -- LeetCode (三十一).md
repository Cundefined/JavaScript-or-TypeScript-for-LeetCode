# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第283题 )  移动零**
       
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

 **示例:**

```javascript
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```

**说明:**

 1. 必须在原数组上操作，不能拷贝额外的数组。
 2.  尽量减少操作次数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路

解题思路：逆向思维，不移动0，而是把非0元素往前移动，移完之后，把后面的全置0

 1. 创建两个指针i、j，初始化都指向数组开头
 2. 用i指针for循环遍历数组，依次移动非0元素：
 	2.1、如果当前i指向的元素为非0，就把当前i指向的元素放到j指向的位置，然后j++往前移动一位，占住位置
 
 3. 上面遍历结束，说明已经把非0元素移动完了，现在要把j位置开始到数组最后的所有元素置0

### 2.1、JavaScript Solution

```javascript
/*
解题思路：逆向思维，不移动0，而是把非0元素往前移动，移完之后，把后面的全置0
1、创建两个指针i、j，初始化都指向数组开头
2、用i指针for循环遍历数组，依次移动非0元素：
    2.1、如果当前i指向的元素为非0，就把当前i指向的元素放到j指向的位置，然后j++往前移动一位，占住位置
3、上面遍历结束，说明已经把非0元素移动完了，现在要把j位置开始到数组最后的所有元素置0
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 1、创建两个指针i、j，初始化都指向数组开头
  let i = 0;
  let j = 0;

  // 2、用i指针for循环遍历数组，依次移动非0元素：
  for (i; i < nums.length; i++) {
    // 2.1、如果当前i指向的元素为非0，就把当前i指向的元素放到j指向的位置，然后j++往前移动一位，占住位置
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  // 3、上面遍历结束，说明已经把非0元素移动完了，现在要把j位置开始到数组最后的所有元素置0
  for (j; j < nums.length; j++) {
    nums[j] = 0;
  }
};
```


### 2.2、TypeScript Solution

```javascript
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i: number = 0;
  let j: number = 0;

  for (i; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (j; j < nums.length; j++) {
    nums[j] = 0;
  }

}
```

