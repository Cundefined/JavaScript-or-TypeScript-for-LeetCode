# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第55题 )  跳跃游戏**
       给定一个非负整数数组，你最初位于数组的第一个位置。数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个位置。



​	  **示例 1:**

```javascript
输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
```
 **示例 2:**
```javascript
输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
解题思路：动态规划、贪心算法

 - 方法一、动态规划【自上而下，开头到结尾-递归】 
 - 方法二、动态规划【自下而上,结尾到开头】 
 - 方法三、贪心算法

三种方法的具体步骤见JS代码块中（写太多啦，偷下懒）

### 2.1、JavaScript Solution

 - 方法一、动态规划【自上而下，开头到结尾-递归】
```javascript
/*
解题思路：动态规划、贪心算法
方法一、动态规划【自上而下，开头到结尾-递归】
1、创建记录标记当前元素是否为通的memo数组，标记：0未知，-1不通，1可通,初始化为全0
2、将最后一个元素标记为1，因为是终点嘛，肯定可以通过
3、创建递归函数jupm():
    3.1、判断当前位置是否已标记，为1的话，是通路，返回true，为-1的话，不是通路，返回false
    3.2、为0的话，说明还未探测，准备起跳！！：
        3.2.1、计算最大跳跃距离，取当前位置+当前位置数字和输入数组最大索引的最小值，从而防止越界
        3.2.2、从当前位置下一个位置遍历到最大跳跃距离的每一个元素：
            3.2.2.1、开始跳跃！！保存返回的结果
            3.2.2.2、如果发现跳到了可以通过的元素上，就把当前位置标记为1，返回true
        3.2.3、跳完之后，还没有返回true的话，说明当前位置不通，应该标记为-1,同时返回false
4、调用递归函数，从第0位置开始跳
5、返回结果
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 1、创建记录标记当前元素是否为通的memo数组，标记：0未知，-1不通，1可通,初始化为全0
  const memo = Array(nums.length).fill(0);
  // 2、将最后一个元素标记为1，因为是终点嘛，肯定可以通过
  memo[nums.length - 1] = 1;

  // 3、创建递归函数jupm():
  function jump(position) {
    // 3.1、判断当前位置是否已标记，为1的话，是通路，返回true，为-1的话，不是通路，返回false
    if (memo[position] === 1) {
      return true;
    } else if (memo[position] === -1) {
      return false;
    }

    // 3.2、为0的话，说明还未探测，准备起跳！！：
    // 3.2.1、计算最大跳跃距离，取当前位置+当前位置数字和输入数组最大索引的最小值，从而防止越界
    const MaxJumpDistance = Math.min(
      position + nums[position],
      nums.length - 1
    );
    // 3.2.2、从当前位置下一个位置遍历到最大跳跃距离的每一个元素：
    for (let i = position + 1; i <= MaxJumpDistance; i++) {
      // 3.2.2.1、开始跳跃！！保存返回的结果，跳到标记为1的元素时，返回true
      const isCanThrough = jump(i);
      // 3.2.2.2、如果发现跳到了可以通过的元素上，就把当前位置标记为1，返回true
      if (isCanThrough === true) {
        memo[position] = 1;
        return true;
      }
    }

    // 3.2.3、跳完之后，还没有返回true的话，说明当前位置不通，应该标记为-1,同时返回false
    memo[position] = -1;
    return false;
  }

  // 4、调用递归函数，从第0位置开始跳
  let isCanThrough = jump(0);
  return isCanThrough;
};

```
- 方法二、动态规划【自下而上,结尾到开头】 

```javascript
/*
解题思路：动态规划、贪心算法
方法二、动态规划【自下而上,结尾到开头】
1、创建记录标记当前元素是否为通的memo数组，标记：0未知，-1不通，1可通,初始化为全0
2、将最后一个元素标记为1，因为是终点嘛，肯定可以通过
3、从输入数组的倒数第二个元素（因为最后一个已经标记为1了）往前遍历每个元素:
    3.1、计算最大跳跃距离，取当前位置+当前位置数字和输入数组最大索引的最小值，从而防止越界
    3.2、开始跳！从当前位置下一个位置遍历到最大跳跃距离的每一个元素：
        3.2.1、一旦调到一个标记为1的元素上，就把当前元素标记为1，退出循环
4、从结尾遍历到开头完成之后，检查起点是否被标为1，是的话，说明可以从起点到终点
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 1、创建记录标记当前元素是否为通的memo数组，标记：0未知，-1不通，1可通,初始化为全0
  const memo = Array(nums.length).fill(0);
  // 2、将最后一个元素标记为1，因为是终点嘛，肯定可以通过
  memo[nums.length - 1] = 1;

  // 3、从输入数组的倒数第二个元素（因为最后一个已经标记为1了）往前遍历每个元素:
  for (let i = nums.length - 2; i >= 0; i--) {
    //  3.1、计算最大跳跃距离，取当前位置+当前位置数字和输入数组最大索引的最小值，从而防止越界
    const MaxJumpDistance = Math.min(i + nums[i], nums.length - 1);
    // 3.2、开始跳！从当前位置下一个位置遍历到最大跳跃距离的每一个元素：
    for (let j = i + 1; j <= MaxJumpDistance; j++) {
      // 3.2.1、一旦调到一个标记为1的元素上，就把当前元素标记为1，退出循环
      if (memo[j] === 1) {
        memo[i] = 1;
        break;
      }
    }
  }

  // 4、从结尾遍历到开头完成之后，检查起点是否被标为1，是的话，说明可以从起点到终点
  if (memo[0] === 1) {
    return true;
  } else {
    return false;
  }
};

```
 - 方法三、贪心算法

```javascript
/*
解题思路：动态规划、贪心算法
方法三、贪心算法
1、创建一个记录终点位置的变量
2、从结尾倒数第二个元素遍历到起点位置
    2.1、如果当前元素值加上当前元素位置索引大于等于终点位置索引，说明当前元素可以跳到终点位置
    2.2、此时要把终点位置往前移到当前元素的位置
4、如果终点位置最后移到起点位置，说明可以到达终点
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 1、创建一个记录终点位置的变量
  let endPosition = nums.length - 1;
  // 2、从结尾倒数第二个元素遍历到起点位置
  for (let i = nums.length - 2; i >= 0; i--) {
    //  2.1、如果当前元素值加上当前元素位置索引大于等于终点位置索引，说明当前元素可以跳到终点位置
    if (i + nums[i] >= endPosition) {
      endPosition = i;
    }
  }

  return endPosition === 0;
};

```

### 2.2、TypeScript Solution
 - 方法一、动态规划【自上而下，开头到结尾-递归】 

```javascript
/*
解题思路：动态规划、贪心算法
方法一、动态规划【自上而下，开头到结尾-递归】
*/
function canJump(nums: number[]): boolean {

    const memo: number[] = Array(nums.length).fill(0);

    memo[nums.length -1] = 1;

    function jump(position: number): boolean {
        if (memo[position] === 1) {
            return true;
        } else if (memo[position] === -1){
            return false;
        }

        let MaxJumpDistance: number = Math.min(position + nums[position], nums.length -1);
        for (let i: number = position + 1; i <= MaxJumpDistance; i++) {
            let isCanThrough = jump(i);
            if (isCanThrough === true) {
                memo[position] = 1;
                return true;
            }
        }

        memo[position] = -1;
        return false;
    }

    let isCanThrough: boolean = jump(0);
    return isCanThrough;
};
```
 - 方法二、动态规划【自下而上,结尾到开头】 

```javascript
/*
解题思路：动态规划、贪心算法
方法二、动态规划【自下而上,结尾到开头】
*/
function canJump(nums: number[]): boolean {
    const memo: number[] = Array(nums.length).fill(0);

    memo[nums.length -1] = 1;

    for (let i: number = nums.length - 2; i >= 0; i--) {
        let MaxJumpDistance: number = Math.min(i + nums[i], nums.length -1);

        for (let j: number = i + 1; j <= MaxJumpDistance; j++) {
            if (memo[j] === 1) {
                memo[i] = 1;
                break;
            }
        }
    }

    return memo[0] === 1;
}
```
 - 方法三、贪心算法

```javascript
/*
解题思路：动态规划、贪心算法
方法三、贪心算法
*/
function canJump(nums: number[]): boolean {
  let endPosition: number = nums.length - 1;

  for (let i: number = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= endPosition) {
      endPosition = i;
    }
  }

  return endPosition === 0;
}

```

