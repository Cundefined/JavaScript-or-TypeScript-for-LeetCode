function reverse(x: number): number {
  let min: number = Math.pow(-2, 31);
  let max: number = Math.pow(2, 31) - 1;

  let sign: number = Math.sign(x);

  x = Math.abs(x);

  let result: number = 0;

  let remainder: number;

  while (x !== 0) {
    remainder = x % 10;

    x = (x - remainder) / 10;

    result = result * 10 + remainder;
  }

  result = sign * result;
  if (result < min || result > max) {
    return 0;
  }

  return result;
}
