/*
解题思路：双指针
方法二、快慢双指针
优点：可使得一侧元素有序
快慢双指针：两个指针如果都从数组开头向后移动的话，可以使得【奇数有序】
          两个指针如果都从数组末尾向前移动的话，可以使得【偶数有序】
*/
function exchange(nums: number[]): number[] {
  //快指针主要负责遍历数组，且遇到偶数先停下判断
  let fast: number = 0;
  let slow: number = 0;

  for (fast; fast < nums.length; fast++) {
    //遇到奇数先停下判断，把奇数往前挪
    if ((nums[fast] & 1) !== 0) {
      //避免数组第一个元素为奇数时，让fast停下来比较，此时两个指针在一起，就不用比较了
      //后面只要fast开始移到，就一定一直在slow前面
      if (fast !== slow) {
        let temp = nums[fast];
        nums[fast] = nums[slow];
        nums[slow] = temp;
      }
      //fast碰到偶数，就移动slow指针
      slow++;
    }
  }

  return nums;
}
