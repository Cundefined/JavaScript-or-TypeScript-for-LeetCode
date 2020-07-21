# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：https://www.bilibili.com/video/BV1wA411b7qZ***

## 1、题目要求
**( LeetCode-第733题 )  图像渲染**
      
有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。

给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。

为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。

最后返回经过上色渲染后的图像。


​	  **示例 1:**

```javascript
输入: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
输出: [[2,2,2],[2,2,0],[2,0,1]]
解析: 
在图像的正中间，(坐标(sr,sc)=(1,1)),
在路径上所有符合条件的像素点的颜色都被更改成2。
注意，右下角的像素没有更改为2，
因为它不是在上下左右四个方向上与初始点相连的像素点。
```
**注意:**

 - image 和 image[0] 的长度在范围 [1, 50] 内。 
 - 给出的初始点将满足 0 <= sr < image.length 和 0 <= sc < image[0].length。
 -  image[i][j] 和 newColor 表示的颜色值在范围 [0,65535]内。



来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flood-fill
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


## 2、解题思路
解题思路：DFS-深度优先搜索 【参考200.Number of Islands、419.Battleships in a Board、695.Max Area of Island】
 1. 边界条件预判：
 	1.1、如果输入的二维数组为空，则返回空数组
    1.2、如果输入的二维数组只有一个元素，则直接赋值新颜色，返回该数组
    1.3、如果着色位置的像素颜色等于新颜色，就不用改了，直接返回图像
 

 3. 定义变量，记录原来的颜色，用于后续判断
 	
 4. 创建dfs函数，探索给定像素位置附件的可改颜色区域：
 	3.1、判断当前sr, sc是否越界，或者当前元素不为原来的颜色为0，则不执行着色，直接return
    3.2、不越界且为oldColor的话，就执行着色，把oldColor置newColor
    3.3、递归调用dfs函数，依次访问着色当前像素的上下左右像素
 5. 调用dfs函数，并返回着色后的image

### 2.1、JavaScript Solution

```javascript
/*
解题思路：DFS-深度优先搜索 【参考200.Number of Islands、419.Battleships in a Board、695.Max Area of Island】
1、边界条件预判：
    1.1、如果输入的二维数组为空，则返回空数组
    1.2、如果输入的二维数组只有一个元素，则直接赋值新颜色，返回该数组
    1.3、如果着色位置的像素颜色等于新颜色，就不用改了，直接返回图像
2、定义变量，记录原来的颜色，用于后续判断
3、创建dfs函数，探索给定像素位置附件的可改颜色区域：
    3.1、判断当前sr, sc是否越界，或者当前元素不为原来的颜色为0，则不执行着色，直接return
    3.2、不越界且为oldColor的话，就执行着色，把oldColor置newColor
    3.3、递归调用dfs函数，依次访问着色当前像素的上下左右像素
4、调用dfs函数，并返回着色后的image
*/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  // 1、边界条件预判：
  // 1.1、如果输入的二维数组为空，则返回空数组
  if (image.length === 0) {
    return [];
  }
  // 1.2、如果输入的二维数组只有一个元素，则直接赋值新颜色，返回该数组
  if (image.length === 1 && image[0].length === 1) {
    image[sr][sc] = newColor;
    return image;
  }
  // 1.3、如果着色位置的像素颜色等于新颜色，就不用改了，直接返回图像
  if (image[sr][sc] === newColor) {
    return image;
  }

  // 2、定义变量，记录原来的颜色
  let oldColor = image[sr][sc];

  // 3、创建dfs函数，探索给定像素位置附件的可改颜色区域：
  function dfs(sr, sc) {
    //   3.1、判断当前sr, sc是否越界，或者当前元素不为原来的颜色为0，则不执行着色，直接return
    if (
      sr < 0 ||
      sr > image.length - 1 ||
      sc < 0 ||
      sc > image[0].length - 1 ||
      image[sr][sc] !== oldColor
    ) {
      return;
    }

    // 3.2、不越界且为oldColor的话，就执行着色，把oldColor置newColor
    image[sr][sc] = newColor;

    // 3.3、递归调用dfs函数，依次访问着色当前像素的上下左右像素
    dfs(sr - 1, sc);
    dfs(sr + 1, sc);
    dfs(sr, sc - 1);
    dfs(sr, sc + 1);
  }
  // 4、调用dfs函数，并返回着色后的image
  dfs(sr, sc);

  return image;
};

```


### 2.2、TypeScript Solution

```javascript
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  if (image.length === 0) {
    return [];
  }

  if (image.length === 1 && image[0].length === 1) {
    image[sr][sc] = newColor;
    return image;
  }

  if (image[sr][sc] === newColor) {
    return image;
  }

  let oldColor: number = image[sr][sc];

  function dfs(sr: number, sc: number): void {
    if (
      sr < 0 ||
      sr > image.length - 1 ||
      sc < 0 ||
      sc > image[0].length - 1 ||
      image[sr][sc] !== oldColor
    ) {
      return;
    }

    image[sr][sc] = newColor;

    dfs(sr - 1, sc);
    dfs(sr + 1, sc);
    dfs(sr, sc - 1);
    dfs(sr, sc + 1);
  }

  dfs(sr, sc);

  return image;
}

```

