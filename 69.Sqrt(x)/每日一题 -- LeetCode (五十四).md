# JavaScript / TypeScript for LeetCode 
**当前进程：**

 - 开始时间：2020.6.27 
 - 结束时间：undefined

***GitHub仓库：https://github.com/Cundefined/JavaScript-or-TypeScript-for-LeetCode***

***参考视频：
https://www.bilibili.com/video/av370511546?p=1&t=409***

## 1、题目要求
**( LeetCode-第69题 )  x 的平方根**
       

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。



 **示例 1:**

```javascript
输入: 4
输出: 2
```
 **示例 2:**
```java
输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sqrtx
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 2、解题思路
解题思路：二分法
注意：位运算更高效，以后可以考虑多使用
位运算参考：https://www.cnblogs.com/ckAng/p/9996699.html
```javascript
1、边界条件预判，如果输入正整数x<=1，则返回x
2、创建两个指针left、right,分别初始化为1和x/2，由于x/2可能为小数
   可以考虑floor下取整，也可以用JS的位运算 “有符号右移(>>)”，右移一位即为二分之一，还取了整
3、while循环，当left紧挨着right时，就不需要二分了，即left+1===right时，停止循环，否则：
    3.1、计算中间位置mid，采用防溢出+位运算（自带取整，且二进制运算高效）
    3.2、如果mid * mid === x，则找到了，返回mid，但为了防溢出，这样写，mid === x / mid
    3.3、如果mid平方小于x，则找小了，left右移到mid处
    3.4、如果mid平方大于x，则找大了，right左移到mid处
4、循环结束还没返回结果的话，说明此时left紧挨着right了，答案就是他两之一
    4.1、如果left的平方小于x的话，则说明答案是right
    4.2、否则，返回left
```

### 2.1、JavaScript Solution

```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 1、边界条件预判，如果输入正整数x<=1，则返回x
  if (x <= 1) {
    return x;
  }

  // 2、创建两个指针left、right,分别初始化为1和x/2
  let left = 1;
  let right = x >> 1;

  //   3、while循环，当left紧挨着right时，就不需要二分了，即left+1===right时，停止循环，否则：
  while (left + 1 < right) {
    // 3.1、计算中间位置mid，采用防溢出+位运算（自带取整，且二进制运算高效）
    let mid = left + ((right - left) >> 1);

    // 3.2、如果mid * mid === x，则找到了，返回mid，但为了防溢出，这样写，mid === x / mid
    if (mid === x / mid) {
      return mid;
    } else if (mid < x / mid) {
      // 3.3、如果mid平方小于x，则找小了，left右移到mid处
      left = mid;
    } else {
      // 3.4、如果mid平方大于x，则找大了，right左移到mid处
      right = mid;
    }
  }

  // 4、循环结束还没返回结果的话，说明此时left紧挨着right了，答案就是他两之一
  //   4.1、如果right的平方大于x的话，则说明答案是left，即使left的平方小于x，因为最终是下取整，小是对的
  if (right > x / right) {
    return left;
  }
  //   4.2、否则，返回right
  return right;
};
```


### 2.2、TypeScript Solution

```javascript
function mySqrt(x: number): number {
  if (x <= 1) {
    return x;
  }

  let left: number = 1;
  let right: number = x >> 1;

  while (left + 1 < right) {
    let mid: number = left + ((right - left) >> 1);

    if (mid === x / mid) {
      return mid;
    } else if (mid < x / mid) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (right > x / right) {
    return left;
  }
  return right;
}
```
### 2.3、Java Solution
```java
class Solution {
    public int mySqrt(int x) {
        if (x <= 1) {
            return x;
          }
        
        int left = 1;
        int right = x >> 1;
        
        while (left + 1 < right) {
        int mid = left + ((right - left) >> 1);
        
        if (mid == x / mid) {
            return mid;
        } else if (mid < x / mid) {
            left = mid;
        } else {
            right = mid;
        }
        }
        
        if (right > x / right) {

            return left;
        }
            return right;
    }
}
```

