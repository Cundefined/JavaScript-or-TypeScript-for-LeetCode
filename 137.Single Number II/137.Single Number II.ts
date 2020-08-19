function singleNumber(nums: number[]): number {
  let res: number = 0;

  for (let i: number = 0; i < 32; i++) {

    let countOne: number = 0;

    for (let j: number = 0; j < nums.length; j++) {
      if ((nums[j] >> i) & 1) {
        countOne++;
      }
    }

    res = res ^ (countOne % 3 << i);
  }

  return res;
};