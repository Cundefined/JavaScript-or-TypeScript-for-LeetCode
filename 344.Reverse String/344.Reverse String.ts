/*
解题思路：方法二、递归
递归：将大问题转化为小问题，通过递归依次解决各个小问题

我们实现递归函数 reverser，它接受两个参数：left 左指针和 right 右指针。
如果 left>=right，不做任何操作。
否则交换 s[left] 和 s[right] 和调用 reverser(left + 1, right - 1)。
首次调用函数我们传递首尾指针反转整个字符串 return reverser(0, len(s) - 1)。

时间复杂度：O(N)  执行了 N/2 次的交换。
空间复杂度：O(N)  递归过程中使用的堆栈空间。
*/
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  function reverser(left: number, right: number): void {
    // 递归结束条件
    if (left >= right) {
      return;
    }

    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
    // 递归
    reverser(left, right);
  }

  reverser(0, s.length - 1);
}
