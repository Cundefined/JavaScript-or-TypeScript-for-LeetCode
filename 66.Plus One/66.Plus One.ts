function plusOne(digits: number[]): number[] {
  for (let i: number = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  let result: number[] = [1, ...digits];
  return result;
}
