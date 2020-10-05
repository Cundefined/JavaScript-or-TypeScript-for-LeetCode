function fourSum(nums: number[], target: number): number[][] {
  const len: number = nums.length;
  const res: number[][] = new Array<number[]>();
  if (len === 0) {
    return res;
  }

  //排序（从小到大）
  nums.sort((a, b) => a - b);

  //固定两个数 用i,j指向他们
  //固定第一个数
  for (let i: number = 0; i < len - 3; i++) {
    //去重判断，如果nums[i] === nums[i-1]说明该数选过了，跳过他，直接进入下次循环
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    //固定第二个数
    for (let j: number = i + 1; j < len - 2; j++) {
      //去重判断，如果nums[j] === nums[j-1]说明该数选过了，跳过他，直接进入下次循环
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      //否则，固定的两个数都不存在重复的话，开始计算离目标值还差多少
      let tempTarget: number = target - nums[i] - nums[j];
      //剩下两个数，负责while循环遍历剩下的元素
      let l: number = j + 1;
      let r: number = len - 1;
      while (l < r) {
        if (nums[l] + nums[r] === tempTarget) {
          //找到了一组合适的两个数，加入res
          let resItem: number[] = new Array();
          resItem.push(nums[i], nums[j], nums[l], nums[r]);
          res.push(resItem);

          //移动指针，继续寻找
          l++;
          //移动了l之后，需要判断是否重复，重复的话要继续l++，直到不重复为止
          while (l < r && nums[l] === nums[l - 1]) {
            l++;
          }

          //同理
          r--;
          while (l < r && nums[r] === nums[r + 1]) {
            r--;
          }
        } else if (nums[l] + nums[r] > tempTarget) {
          //偏大了，需要减小值去接近tempTarget
          //由于是升序排序，把r--就可以减小值
          r--;
        } else {
          l++;
        }
      }
    }
  }

  return res;
}
