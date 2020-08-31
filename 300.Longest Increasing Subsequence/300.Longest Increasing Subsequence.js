/*
f[i] 表示从0开始到i结尾的最长上升序列（可以是不连续的）长度
f[i] = max(f[j]+1,f[i]) ,a[j]<a[i]
f[0...n-1] = 1
max(f[0]...f[n-1])

时间复杂度 -- O(n2) 两次for循环
空间复杂度 -- O(n) 开辟了一个和输入数组一样大的dp数组
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const arrayLength = nums.length;
  if (arrayLength <= 1) {
    return arrayLength;
  }

  const dp = new Array(arrayLength);

  //创建结果变量，初始化为1，最短也是自己一个
  let res = 1;

  for (let i = 0; i < arrayLength; i++) {
    // 只考虑当前位置的数字
    dp[i] = 1;
    // 再一个一个往前，考虑当前位置之前的所有元素
    for (let j = i - 1; j >= 0; j--) {
      // 如果找到比自己小的元素，看看是不是呢构成长度更长的上升序列
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }

      //   结果选出dp数组中最大的那个值，即为最大长度的上升序列
      res = Math.max(res, dp[i]);
    }
  }

  return res;
};
