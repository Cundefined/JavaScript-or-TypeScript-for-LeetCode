/*
新建数组saveLIS，用于保存最长上升子序列。
对原序列进行遍历，将每位元素【二分插入saveLIS中】

1、如果saveLIS中元素都比它小，将它插到最后
2、否则，用它覆盖掉【比它大的元素中最小】的那个。
目的：让saveLIS中存储比较小的元素。这样，saveLIS 未必是真实的最长上升子序列，但长度是对的

时间复杂度 -- O(nlogn) 一次for循环，一次二分搜索
空间复杂度 -- O(n) 
*/
function lengthOfLIS(nums: number[]): number {
  const arrayLength: number = nums.length;
  if (arrayLength <= 1) {
    return arrayLength;
  }

  const saveLIS: number[] = [];

  for (let i: number = 0; i < arrayLength; i++) {
    insertToSave(nums[i]);
  }
  return saveLIS.length;

  function insertToSave(element: number): void {
    if (saveLIS.length === 0) {
      saveLIS.push(element);
      return;
    }

    // 利用二分查找，将元素插入到saveLIS数组中
    let left: number = 0;
    let right: number = saveLIS.length - 1;

    while (left <= right) {
      let mid: number = Math.floor(left + (right - left) / 2);

      if (saveLIS[mid] === element) {
        return;
      } else if (saveLIS[mid] < element) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    saveLIS[left] = element;
  }
}
