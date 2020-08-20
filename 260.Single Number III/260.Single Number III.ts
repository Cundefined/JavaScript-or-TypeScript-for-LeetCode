function singleNumber(nums: number[]): number[] {
    let xorAllItem: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
      xorAllItem = xorAllItem ^ nums[i];
    }
  
    let bitFromAB: number = 1;
    while ((bitFromAB & xorAllItem) === 0) {
      bitFromAB = bitFromAB << 1;
    }
  
    let a: number = 0;
    let b: number = 0;
    for (const item of nums) {
      if ((item & bitFromAB) === 0) {
        b ^= item;
      } else {
        a ^= item;
      }
    }
  
    return [a, b];
};