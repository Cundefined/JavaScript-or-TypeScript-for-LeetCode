# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第419题 )  甲板上的战舰**
      
给定一个二维的甲板， 请计算其中有多少艘战舰。 战舰用 'X'表示，空位用 '.'表示。 你需要遵守以下规则：

 - 给你一个有效的甲板，仅由战舰或者空位组成。 
 - 战舰只能水平或者垂直放置。换句话说,战舰只能由 1xN (1 行, N 列)组成，或者 Nx1(N 行, 1 列)组成，其中N可以是任意大小。
 - 两艘战舰之间至少有一个水平或垂直的空位分隔 - 即没有相邻的战舰。

    
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/battleships-in-a-board
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


​	  **示例 :**

```javascript
X..X
...X
...X
```
在上面的甲板中有2艘战舰。

**无效样例 :**
```javascript
...X
XXXX
...X
```
你不会收到这样的无效甲板 - 因为战舰之间至少会有一个空位将它们分开。

**进阶:**

你可以用**一次扫描算法**，只使用**O(1)额外空间**，并且**不修改**甲板的值来解决这个问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/battleships-in-a-board
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 2、解题思路
解题思路：DFS-深度优先搜索 【参考200.Number of Islands】
 1. 定义变量，记录战舰数量
 

 2. 创建dfs函数：
 	2.1、判断当前row、col是否越界，或者当前元素为.，则不执行沉没处理，直接return
    2.2、不越界且为X的话，就执行沉没，把X置.
    2.3、递归调用dfs函数，依次访问沉没当前元素的上下左右元素（往上沉没完之后，返回当前位置，往下沉没完之后，返回当前位置，接着把左右都沉没完）
 3. 遍历二维数组的每个元素：
 3.1、如果当前元素为1的话，就说明找到了一个战舰，把计数变量加一，然后沉没当前元素所在的战舰
 5. 返回战舰数量

### 2.1、JavaScript Solution

```javascript
/*
解题思路：DFS-深度优先搜索 【参考200.Number of Islands】
1、定义变量，记录战舰数量
2、创建dfs函数：
    2.1、判断当前row、col是否越界，或者当前元素为.，则不执行沉没处理，直接return
    2.2、不越界且为X的话，就执行沉没，把X置.
    2.3、递归调用dfs函数，依次访问沉没当前元素的上下左右元素（往上沉没完之后，返回当前位置，往下沉没完之后，返回当前位置，接着把左右都沉没完）
3、遍历二维数组的每个元素：
    3.1、如果当前元素为1的话，就说明找到了一个战舰，把计数变量加一，然后沉没当前元素所在的战舰
4、返回战舰数量
*/
/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {

  // 1、定义变量，记录战舰数量
  let countShips = 0;

  // 2、创建dfs函数：
  function dfs(row, col) {
    // 2.1、判断当前row、col是否越界，或者当前元素为0，则不执行沉没处理，直接return
    if (
      row < 0 ||
      row > board.length - 1 ||
      col < 0 ||
      col > board[0].length - 1 ||
      board[row][col] === "."
    ) {
      return;
    }

    // 2.2、不越界且为X的话，就执行沉没，把X置.
    board[row][col] = ".";

    // 2.3、递归调用dfs函数，依次访问沉没当前元素的上下左右元素（往上沉没完之后，返回当前位置，往下沉没完之后，返回当前位置，接着把左右都沉没完）
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }

  // 3、遍历二维数组的每个元素：
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // 3.1、如果当前元素为1的话，就说明找到了一个战舰，把计数变量加一，然后沉没当前元素所在的战舰
      if (board[row][col] === "X") {
        countShips++;
        dfs(row, col);
      }
    }
  }

  // 4、返回战舰数量
  return countShips;
};
```


### 2.2、TypeScript Solution

```javascript
/*
进阶:
你可以用一次扫描算法，只使用O(1)额外空间，并且不修改甲板的值来解决这个问题吗？
*/
function countBattleships(board: string[][]): number {
  let countShips: number = 0;

  for (let row: number = 0; row < board.length; row++) {
    for (let col: number = 0; col < board[0].length; col++) {
      if (board[row][col] === "X") {
        if (row > 0 && board[row - 1][col] === 'X') {
          continue;
        }

        if (col > 0 && board[row][col - 1] === 'X') {
          continue;
        }

        countShips++;
      }
    }
  }

  return countShips;
}
```

