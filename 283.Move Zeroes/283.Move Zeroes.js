/*
解题思路：逆向思维，不移动0，而是把非0元素往前移动，移完之后，把后面的全置0
1、创建两个指针i、j，初始化都指向数组开头
2、用i指针for循环遍历数组，依次移动非0元素：
    2.1、如果当前i指向的元素为非0，就把当前i指向的元素放到j指向的位置，然后j++往前移动一位，占住位置
3、上面遍历结束，说明已经把非0元素移动完了，现在要把j位置开始到数组最后的所有元素置0
4、返回nums数组
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

  // 4、返回nums数组
  return nums;
};
