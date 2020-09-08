function searchRange(nums: number[], target: number): number[] {
  let left: number = 0;
  let right: number = nums.length - 1;

  const res: number[] = [-1, -1];

  while (left <= right) {
    let mid: number = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      let tempMid: number = mid;
      // 一直往左移，找到左端（最开始出现的位置），什么时候停呢，当发现nums[tempMid]不等于target时，
      // 说明刚刚移出到最左端，那么最左端就是当前位置加一
      while (tempMid >= left && nums[tempMid] === target) {
        tempMid--;
      }
      //记录最左端位置
      res[0] = tempMid + 1;

      //把tempMid移回原来的位置
      tempMid = mid;

      while (tempMid <= right && nums[tempMid] === target) {
        tempMid++;
      }
      //记录最右端位置
      res[1] = tempMid - 1;

      //都找到后，退出循环
      break;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return res;
}
